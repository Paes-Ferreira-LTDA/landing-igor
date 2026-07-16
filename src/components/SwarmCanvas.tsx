'use client'

import { useEffect, useRef } from 'react'

const EDGE_COLOR  = '59,130,246'   // brand blue
const BG_COLOR    = '#021C35'      // dark navy

const PULSE_COLORS: Record<string, string> = {
  request:  '#06B6D4',
  inform:   '#10B981',
  propose:  '#F59E0B',
  accept:   '#3B82F6',
  reject:   '#DC2626',
  queryref: '#7C3AED',
}

const PULSE_BAG = ['inform','inform','inform','inform','request','request','propose','accept','queryref']

// Agentes reais — icon casa com os cards
const REAL_AGENTS = [
  { node: 0, icon: '◎', color: '59,130,246',  label: 'MUTHUR',   sub: 'Mother OS · Orchestrator' },
  { node: 1, icon: '◈', color: '96,165,250',  label: 'Bishop',   sub: 'Strategy OS' },
  { node: 2, icon: '◆', color: '16,185,129',  label: 'Walter',   sub: 'Operations OS' },
  { node: 3, icon: '◇', color: '139,92,246',  label: 'bxsales',  sub: 'Synthetic · Haiku' },
  { node: 4, icon: '◇', color: '139,92,246',  label: 'bxcrm',    sub: 'Synthetic · Haiku' },
  { node: 5, icon: '◇', color: '139,92,246',  label: 'bxmkt',    sub: 'Synthetic · Haiku' },
  { node: 6, icon: '◇', color: '139,92,246',  label: 'bxgwt',    sub: 'Synthetic · Haiku' },
  { node: 7, icon: '⬡', color: '217,119,6',   label: 'Founder',  sub: 'HITL · Authority' },
]

export function SwarmCanvas({ height = 420 }: { height?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const dpr = window.devicePixelRatio || 1

    const state = {
      nodes: [] as { x: number; y: number; z: number }[],
      edges: [] as { a: number; b: number }[],
      adj:   [] as number[][],
      pulses: [] as { a: number; b: number; t: number; c: string; s: number }[],
      rx: 0.18, ry: 0, zoom: 1.0,
      raf: 0, alive: true,
    }

    let W = 0, H = 0
    let _s = 42
    const rand = () => { _s = (_s * 9301 + 49297) % 233280; return _s / 233280 }

    const fit = () => {
      const r = canvas.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      W = r.width; H = r.height
      canvas.width  = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const buildNetwork = () => {
      state.nodes = []; state.edges = []; state.adj = []; state.pulses = []
      const N = 120
      for (let i = 0; i < N; i++) {
        const t = rand() * Math.PI * 2
        const p = Math.acos(2 * rand() - 1)
        const r = 0.85 + rand() * 0.15
        state.nodes.push({ x: r*Math.sin(p)*Math.cos(t), y: r*Math.sin(p)*Math.sin(t), z: r*Math.cos(p) })
      }
      // Posições fixas para agentes reais na esfera
      const positions = [
        [0, 0, 1], [0.5, 0.5, 0.7], [-0.5, 0.5, 0.7], [0.8, -0.3, 0.5],
        [-0.8, -0.3, 0.5], [0.3, -0.9, 0.3], [-0.3, -0.9, 0.3], [0, 1, 0],
      ]
      REAL_AGENTS.forEach((a, i) => {
        if (i < positions.length) {
          const [x, y, z] = positions[i]
          state.nodes[a.node] = { x: x as number, y: y as number, z: z as number }
        }
      })
      const D = 0.55
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = state.nodes[i].x - state.nodes[j].x
          const dy = state.nodes[i].y - state.nodes[j].y
          const dz = state.nodes[i].z - state.nodes[j].z
          if (Math.sqrt(dx*dx + dy*dy + dz*dz) < D) state.edges.push({ a: i, b: j })
        }
      }
      for (let i = 0; i < N; i++) state.adj.push([])
      state.edges.forEach((e, k) => { state.adj[e.a].push(k); state.adj[e.b].push(k) })
    }

    const spawn = (eIdx: number, col: string) => {
      const e = state.edges[eIdx]; if (!e) return
      state.pulses.push({ a: e.a, b: e.b, t: 0, c: col, s: 0.009 })
    }

    const proj = (x: number, y: number, z: number) => {
      const cy = Math.cos(state.ry), sy = Math.sin(state.ry)
      const cx = Math.cos(state.rx), sx = Math.sin(state.rx)
      const x1 = x*cy - z*sy
      const z1 = x*sy + z*cy
      const y1 = y*cx - z1*sx
      const z2 = y*sx + z1*cx
      const sc = Math.min(W, H) * 0.36 * state.zoom
      const ps = 1 / (1 + z2 * 0.28)
      return { px: W/2 + x1*sc*ps, py: H/2 + y1*sc*ps, d: z2 }
    }

    const drawAgentNode = (
      p: { px: number; py: number; d: number },
      agent: typeof REAL_AGENTS[0]
    ) => {
      const depth = Math.max(0, Math.min(1, (1 - p.d) * 0.5 + 0.5))
      const al = 0.6 + depth * 0.4
      const fontSize = Math.round(18 + depth * 14)
      // Halo
      ctx.fillStyle = `rgba(${agent.color},${(al * 0.15).toFixed(3)})`
      ctx.beginPath(); ctx.arc(p.px, p.py, fontSize * 0.9, 0, Math.PI * 2); ctx.fill()
      // Ícone
      ctx.fillStyle = `rgba(${agent.color},${al.toFixed(3)})`
      ctx.font = `${fontSize}px ui-sans-serif,system-ui,sans-serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(agent.icon, p.px, p.py)
    }

    const frame = () => {
      if (!state.alive) return
      if (!W || !H) { fit(); state.raf = requestAnimationFrame(frame); return }
      state.ry += 0.0022

      ctx.fillStyle = BG_COLOR
      ctx.fillRect(0, 0, W, H)

      const P = state.nodes.map(n => proj(n.x, n.y, n.z))

      // Edges
      state.edges.forEach(e => {
        const a = P[e.a], b = P[e.b]
        const al = 0.06 + Math.max(0, (1 - (a.d + b.d) / 2) * 0.12)
        ctx.strokeStyle = `rgba(${EDGE_COLOR},${al.toFixed(3)})`
        ctx.lineWidth = 0.6
        ctx.beginPath(); ctx.moveTo(a.px, a.py); ctx.lineTo(b.px, b.py); ctx.stroke()
      })

      // Pulses
      for (let i = state.pulses.length - 1; i >= 0; i--) {
        state.pulses[i].t += state.pulses[i].s
        if (state.pulses[i].t >= 1) { state.pulses.splice(i, 1); continue }
      }
      state.pulses.forEach(p => {
        const a = P[p.a], b = P[p.b]
        const px = a.px + (b.px - a.px) * p.t
        const py = a.py + (b.py - a.py) * p.t
        ctx.fillStyle = p.c + '50'
        ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI*2); ctx.fill()
        ctx.fillStyle = p.c
        ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI*2); ctx.fill()
      })

      // Nodes — apenas agentes reais, ordenados por profundidade
      const nOrder = REAL_AGENTS
        .map(a => ({ a, d: P[a.node]?.d ?? 0 }))
        .sort((x, y) => x.d - y.d)
      nOrder.forEach(({ a }) => {
        const p = P[a.node]
        if (p) drawAgentNode(p, a)
      })

      // Labels sobre agentes reais
      ctx.textBaseline = 'top'
      REAL_AGENTS.forEach(agent => {
        const p = P[agent.node]
        if (!p) return
        const depth = Math.max(0, Math.min(1, (1 - p.d) * 0.5 + 0.5))
        const al = 0.6 + depth * 0.4
        const fontSize = Math.round(18 + depth * 14)
        const offset = fontSize * 1.1
        ctx.fillStyle = `rgba(255,255,255,${(al * 0.85).toFixed(2)})`
        ctx.font = `600 10px ui-monospace,monospace`
        ctx.textAlign = 'center'
        ctx.fillText(agent.label, p.px, p.py + offset)
        ctx.fillStyle = `rgba(255,255,255,${(al * 0.35).toFixed(2)})`
        ctx.font = `8.5px ui-monospace,monospace`
        ctx.fillText(agent.sub, p.px, p.py + offset + 12)
      })

      // Spawn pulses a partir dos agentes reais
      const realNodes = REAL_AGENTS.map(a => a.node)
      if (Math.random() < 0.09) {
        const fromNode = realNodes[Math.floor(Math.random() * realNodes.length)]
        const edges = state.adj[fromNode]
        if (edges && edges.length > 0) {
          const eIdx = edges[Math.floor(Math.random() * edges.length)]
          const perf = PULSE_BAG[Math.floor(Math.random() * PULSE_BAG.length)]
          spawn(eIdx, PULSE_COLORS[perf])
        }
      }

      state.raf = requestAnimationFrame(frame)
    }

    fit()
    window.addEventListener('resize', fit)
    buildNetwork()
    state.alive = true
    state.raf = requestAnimationFrame(frame)

    return () => {
      state.alive = false
      cancelAnimationFrame(state.raf)
      window.removeEventListener('resize', fit)
    }
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-[var(--color-brand)]/15"
      style={{ height, background: BG_COLOR }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--color-surface)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-surface)] to-transparent" />
    </div>
  )
}
