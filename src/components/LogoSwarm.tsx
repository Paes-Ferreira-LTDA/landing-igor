"use client";

import { useEffect, useRef } from "react";

// Enxame de partículas que converge e "forma" a logo — port em <canvas> do
// protótipo logo-swarm.jsx (handoff design_handoff_logo_swarm_animations).
// Reprodução única ao entrar no viewport; segura o último frame.

type Pt = [number, number, number, number, number]; // xNorm, yNorm, r, g, b
type Sampled = { pts: Pt[]; aspect: number; img: HTMLImageElement };

const CACHE = new Map<string, Sampled>();
const PENDING = new Map<string, Array<(d: Sampled) => void>>();

function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

function smooth(p: number, a: number, b: number) {
  const t = clamp01((p - a) / (b - a));
  return t * t * (3 - 2 * t);
}

function qbez(a: number, c: number, b: number, t: number) {
  const u = 1 - t;
  return u * u * a + 2 * u * t * c + t * t * b;
}

function samplePoints(src: string, cb: (d: Sampled) => void) {
  const hit = CACHE.get(src);
  if (hit) {
    cb(hit);
    return;
  }
  const queue = PENDING.get(src);
  if (queue) {
    queue.push(cb);
    return;
  }
  PENDING.set(src, [cb]);
  const im = new Image();
  im.onload = () => {
    const maxDim = 340;
    const sc = Math.min(maxDim / im.width, maxDim / im.height);
    const w = Math.max(1, Math.round(im.width * sc));
    const h = Math.max(1, Math.round(im.height * sc));
    const cv = document.createElement("canvas");
    cv.width = w;
    cv.height = h;
    const cx = cv.getContext("2d", { willReadFrequently: true });
    if (!cx) return;
    cx.drawImage(im, 0, 0, w, h);
    const d = cx.getImageData(0, 0, w, h).data;
    const cand: Pt[] = [];
    for (let y = 0; y < h; y++)
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
        if (a < 140) continue;
        if (r > 236 && g > 236 && b > 236) continue; // ignora fundo branco
        cand.push([x / w, y / h, r, g, b]);
      }
    const budget = 1200;
    const step = Math.max(1, cand.length / budget);
    const raw: Pt[] = [];
    for (let i = 0; i < cand.length; i += step) raw.push(cand[Math.floor(i)]);
    // embaralha (determinístico) para que fatias por densidade cubram o logo inteiro
    const rnd = mulberry32(77);
    for (let i = raw.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const t = raw[i];
      raw[i] = raw[j];
      raw[j] = t;
    }
    const out: Sampled = { pts: raw, aspect: im.width / im.height, img: im };
    CACHE.set(src, out);
    PENDING.get(src)?.forEach((f) => f(out));
    PENDING.delete(src);
  };
  im.src = src;
}

type Particle = {
  c: Pt;
  ang: number;
  rad: number; // px no stage 1080 do design
  cxo: number;
  cyo: number;
  delay: number;
  rBase: number;
};

interface LogoSwarmProps {
  src: string;
  className?: string;
  /** 'scene' usa as proporções do stage 1080 do design; 'fill' encaixa a logo no container */
  fit?: "scene" | "fill";
  align?: "center" | "left";
  density?: number;
  /** duração em segundos */
  duration?: number;
  /** multiplicador de opacidade da logo nítida no frame final (uso decorativo) */
  settle?: number;
  ariaLabel?: string;
}

export function LogoSwarm({
  src,
  className,
  fit = "scene",
  align = "center",
  density = 1200,
  duration = 5,
  settle = 1,
  ariaLabel,
}: LogoSwarmProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let alive = true;
    let raf = 0;
    let started = false;
    let visible = false;
    let done = false;
    let startTs = 0;
    let W = 0;
    let H = 0;
    let data: Sampled | null = null;
    let P: Particle[] = [];
    let pairs: [number, number][] = [];

    const fitCanvas = () => {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      W = r.width;
      H = r.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const build = (d: Sampled) => {
      const rnd = mulberry32(src.length * 131 + 7);
      P = d.pts.map((c) => ({
        c,
        ang: rnd() * Math.PI * 2,
        rad: 540 + rnd() * 340,
        cxo: (rnd() - 0.5) * 560,
        cyo: (rnd() - 0.5) * 560,
        delay: rnd(),
        rBase: 1.9 + rnd() * 1.5,
      }));
      pairs = [];
      const m = Math.min(P.length, 400);
      for (let k = 0; k < 3000 && pairs.length < 80; k++) {
        const i = Math.floor(rnd() * m);
        const j = Math.floor(rnd() * m);
        if (i !== j) pairs.push([i, j]);
      }
    };

    const draw = (p: number) => {
      if (!data || !W || !H) return;
      ctx.clearRect(0, 0, W, H);
      const { aspect, img } = data;
      // Geometria de voo escalada pelo maior lado; layout da cena pelo menor
      const kFlight = Math.max(W, H) / 1080;
      const kScene = Math.min(W, H) / 1080;

      const ih =
        fit === "scene"
          ? Math.min(560 * kScene, (680 * kScene) / aspect)
          : Math.min(H, W / aspect);
      const iw = ih * aspect;
      const rx = align === "left" ? 0 : (W - iw) / 2;
      const ry = (H - ih) / 2 - (fit === "scene" ? 28 * kScene : 0);

      const converge = 0.34;
      const fadeOut = smooth(p, 0.74, 0.9);
      const imgOp = smooth(p, 0.7, 0.87);
      const lineOp = smooth(p, 0.06, 0.28) * (1 - smooth(p, 0.58, 0.76));
      const cam = 1.045 - 0.045 * (1 - Math.pow(1 - p, 2));
      const rs = ih / 500;

      ctx.save();
      ctx.translate(W / 2, H / 2);
      ctx.scale(cam, cam);
      ctx.translate(-W / 2, -H / 2);

      const n = Math.min(density, P.length);
      const pos: { x: number; y: number; op: number; r: number; col: string }[] =
        new Array(n);
      for (let i = 0; i < n; i++) {
        const pt = P[i];
        const t0 = 0.04 + pt.delay * 0.36;
        const u = clamp01((p - t0) / converge);
        const e = 1 - Math.pow(1 - u, 3);
        const sx = W / 2 + Math.cos(pt.ang) * pt.rad * kFlight;
        const sy = H / 2 + Math.sin(pt.ang) * pt.rad * kFlight;
        const tx = rx + pt.c[0] * iw;
        const ty = ry + pt.c[1] * ih;
        const x = qbez(sx, (sx + tx) / 2 + pt.cxo * kFlight, tx, e);
        const y = qbez(sy, (sy + ty) / 2 + pt.cyo * kFlight, ty, e);
        const cr = 59 + (pt.c[2] - 59) * e;
        const cg = 130 + (pt.c[3] - 130) * e;
        const cb = 246 + (pt.c[4] - 246) * e;
        pos[i] = {
          x,
          y,
          op: Math.min(1, u * 6) * (1 - fadeOut),
          r: Math.max(0.8, pt.rBase * rs) * (1 - 0.4 * fadeOut),
          col: `rgb(${cr | 0},${cg | 0},${cb | 0})`,
        };
      }

      if (lineOp > 0.01) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#3B82F6";
        const maxD = 240 * kFlight;
        for (const [i, j] of pairs) {
          if (i >= n || j >= n) continue;
          const a = pos[i], b = pos[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          if (dx * dx + dy * dy > maxD * maxD) continue;
          ctx.globalAlpha = 0.28 * lineOp * Math.min(a.op, b.op);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < n; i++) {
        const q = pos[i];
        if (q.op <= 0.01) continue;
        ctx.globalAlpha = q.op;
        ctx.fillStyle = q.col;
        ctx.beginPath();
        ctx.arc(q.x, q.y, q.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (imgOp > 0.001) {
        ctx.globalAlpha = imgOp * settle;
        ctx.drawImage(img, rx, ry, iw, ih);
      }
      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const frame = (now: number) => {
      if (!alive) return;
      const p = clamp01((now - startTs) / (duration * 1000));
      draw(p);
      if (p >= 1) {
        done = true;
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (started || !alive) return;
      started = true;
      if (!W || !H) fitCanvas();
      if (reduced) {
        done = true;
        draw(1);
        return;
      }
      startTs = performance.now();
      raf = requestAnimationFrame(frame);
    };

    fitCanvas();
    samplePoints(src, (d) => {
      if (!alive) return;
      data = d;
      build(d);
      if (visible) start();
    });

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          visible = true;
          if (data) start();
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      fitCanvas();
      if (done) draw(1);
    });
    ro.observe(canvas);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [src, fit, align, density, duration, settle]);

  return (
    <canvas
      ref={canvasRef}
      className={className ? `block ${className}` : "block h-full w-full"}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    />
  );
}
