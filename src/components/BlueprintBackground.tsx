/* Fundo "blueprint de IA": grade técnica, rede neural em camadas, trilhas de
   circuito, cotas e anotações em mono. Puro CSS/SVG, decorativo (aria-hidden). */

const STROKE = "#60A5FA";

// Rede neural em camadas (esquerda): [x, ys[]]
const LAYERS: [number, number[]][] = [
  [70, [180, 260, 340]],
  [170, [140, 220, 300, 380]],
  [270, [180, 260, 340]],
  [370, [220, 300]],
];

// Trilhas de circuito (direita)
const TRACES = [
  "M 1130 160 H 1040 L 1010 190 V 290 L 980 320 H 900",
  "M 1130 230 H 1070 L 1050 250 V 340 H 960",
  "M 1130 300 H 1100 V 420 L 1070 450 H 930",
  "M 1130 520 H 1020 L 990 490 V 440",
];

function Drawing() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      style={{
        maskImage: "radial-gradient(ellipse at 50% 45%, transparent 28%, #000 78%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, transparent 28%, #000 78%)",
        opacity: 0.55,
      }}
    >
        <g stroke={STROKE} strokeWidth="1">
          {/* Marcas de registro nos cantos */}
          {[
            [24, 24],
            [1176, 24],
            [24, 776],
            [1176, 776],
          ].map(([x, y]) => (
            <g key={`${x}-${y}`} opacity="0.7">
              <path d={`M ${x - 10} ${y} H ${x + 10} M ${x} ${y - 10} V ${y + 10}`} />
              <circle cx={x} cy={y} r="5" />
            </g>
          ))}

          {/* Rede neural */}
          <g opacity="0.55">
            {LAYERS.slice(0, -1).flatMap(([x1, ys1], li) =>
              ys1.flatMap((y1) =>
                LAYERS[li + 1][1].map((y2) => (
                  <line key={`${x1}-${y1}-${y2}`} x1={x1} y1={y1} x2={LAYERS[li + 1][0]} y2={y2} strokeOpacity="0.55" />
                ))
              )
            )}
          </g>
          {LAYERS.flatMap(([x, ys]) =>
            ys.map((y) => (
              <g key={`n${x}-${y}`}>
                <circle cx={x} cy={y} r="7" fill="#0c1a33" />
                <circle cx={x} cy={y} r="2.5" fill={STROKE} stroke="none" />
              </g>
            ))
          )}
          {/* Rótulos das camadas */}
          {["INPUT", "AGENTS", "TOOLS", "OUTPUT"].map((label, i) => (
            <text key={label} x={LAYERS[i][0]} y={430} textAnchor="middle" fill={STROKE} stroke="none" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.5">
              {label}
            </text>
          ))}

          {/* Cota horizontal sob a rede */}
          <g opacity="0.8">
            <path d="M 70 460 H 370 M 70 454 V 466 M 370 454 V 466" />
            <path d="M 70 460 l 6 -3 v 6 z M 370 460 l -6 -3 v 6 z" fill={STROKE} stroke="none" />
            <text x="220" y="478" textAnchor="middle" fill={STROKE} stroke="none" fontSize="10" fontFamily="ui-monospace, monospace">
              Ø MESH · 4 LAYERS · HITL
            </text>
          </g>

          {/* Chip + trilhas de circuito */}
          <rect x="790" y="360" width="110" height="110" rx="4" />
          <rect x="806" y="376" width="78" height="78" rx="2" strokeOpacity="0.5" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <path d={`M ${806 + i * 19} 360 V 348 M ${806 + i * 19} 470 V 482`} />
              <path d={`M 790 ${376 + i * 19} H 778 M 900 ${376 + i * 19} H 912`} />
            </g>
          ))}
          <text x="845" y="420" textAnchor="middle" fill={STROKE} stroke="none" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1">
            eXmesh
          </text>
          <text x="845" y="436" textAnchor="middle" fill={STROKE} stroke="none" fontSize="8" fontFamily="ui-monospace, monospace" opacity="0.7">
            SWARM · GKE
          </text>

          {TRACES.map((d, i) => (
            <g key={i}>
              <path d={d} strokeOpacity="0.45" />
              <path d={d} className="bp-flow" strokeDasharray="6 34" strokeWidth="2" strokeLinecap="round" />
            </g>
          ))}
          {[
            [1130, 160],
            [1130, 230],
            [1130, 300],
            [1130, 520],
          ].map(([x, y]) => (
            <circle key={`v${y}`} cx={x} cy={y} r="4" fill="#0c1a33" />
          ))}

          {/* Anotações */}
          <g fill={STROKE} stroke="none" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5" opacity="0.8">
            <text x="1176" y="60" textAnchor="end">FIG. 03 — AGENT MESH</text>
            <text x="1176" y="74" textAnchor="end">REV. 2026 · SCALE 1:1</text>
            <text x="24" y="60">GOVERNANCE GATEWAY ▸ OKRs · MANDATES</text>
            <text x="1176" y="760" textAnchor="end">PRODUCTION · GCP · HITL ✔</text>
          </g>

          {/* Detalhe: círculo de referência tracejado */}
          <circle cx="600" cy="400" r="330" strokeDasharray="2 8" strokeOpacity="0.35" />
          <circle cx="600" cy="400" r="250" strokeDasharray="1 6" strokeOpacity="0.25" />
        </g>
    </svg>
  );
}

export function BlueprintBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(30,64,120,0.35), transparent 60%), #0a1930",
      }}
    >
      {/* Grade fina + grade principal */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(96,165,250,0.07) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(96,165,250,0.07) 1px, transparent 1px)",
            "linear-gradient(rgba(96,165,250,0.14) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(96,165,250,0.14) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "16px 16px, 16px 16px, 96px 96px, 96px 96px",
        }}
      />
      {/* Desenho técnico — some no centro para não competir com o texto */}
      <Drawing />
    </div>
  );
}
