export function AISystemsDiagram() {
  return (
    <div
      className="overflow-x-auto rounded-xl border border-white/8"
      style={{
        background: "#0B0E14",
        /* sobrescreve variáveis de cor do KB para o contexto do landing */
        ["--void" as string]: "#0B0E14",
        ["--panel" as string]: "#141A24",
        ["--panel-2" as string]: "#1B222E",
        ["--line" as string]: "#2A3441",
        ["--line-soft" as string]: "#212A36",
        ["--ink" as string]: "#C9D4E0",
        ["--ink-dim" as string]: "#7A8899",
        ["--ink-faint" as string]: "#556274",
        ["--amber" as string]: "#3B82F6",       /* brand blue no lugar do amber */
        ["--amber-soft" as string]: "rgba(59,130,246,.14)",
        ["--cyan" as string]: "#60A5FA",         /* brand-400 no lugar do cyan */
        ["--cyan-soft" as string]: "rgba(96,165,250,.12)",
        ["--ok" as string]: "#6FBF73",
      }}
    >
      <svg
        viewBox="0 0 980 620"
        role="img"
        aria-label="Diagrama de arquitetura do eXmesh: MUTHUR, gateway de governança, managers, synthetics, camada MCP e substrato GCP"
        style={{ width: "100%", minWidth: 720, height: "auto", display: "block" }}
      >
        <style>{`
          .kb-box  { fill: #1B222E; stroke: #2A3441; stroke-width: 1.2 }
          .kb-box.amber { stroke: #3B82F6 }
          .kb-box.cyan  { stroke: #60A5FA }
          .kb-box.green { stroke: #6FBF73; fill: rgba(111,191,115,.06) }
          .kb-box.dim   { stroke: #212A36; fill: #0B0E14 }
          .kb-lbl  { fill: #C9D4E0; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 13px; font-weight: 600 }
          .kb-sub  { fill: #7A8899; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 10px }
          .kb-tl   { fill: #556274; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 10px; letter-spacing: .1em }
          .kb-tf   { fill: #556274; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 9.5px }
          .kb-ta   { fill: #3B82F6; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 9.5px }
          .kb-edge { stroke: #2A3441; stroke-width: 1.3; fill: none }
          .kb-edge.amber { stroke: #3B82F6; opacity: .75 }
          .kb-edge.cyan  { stroke: #60A5FA; opacity: .6 }
          .kb-edge.dash  { stroke-dasharray: 4 4 }
          .kb-adr  { fill: #3B82F6; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 9.5px; opacity: .7 }
          .kb-flow { fill: #60A5FA; font-family: ui-monospace,"SF Mono",Menlo,Consolas,monospace; font-size: 10px }
        `}</style>

        <defs>
          <marker id="lp-arw"  markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#7A8899"/>
          </marker>
          <marker id="lp-arwA" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#3B82F6"/>
          </marker>
          <marker id="lp-arwC" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#60A5FA"/>
          </marker>
        </defs>

        {/* origem */}
        <rect className="kb-box" x="30" y="20" width="170" height="52" rx="5"/>
        <text className="kb-lbl" x="115" y="44" textAnchor="middle">HUMANOS</text>
        <text className="kb-sub" x="115" y="60" textAnchor="middle">crons · OKRs (origem)</text>

        {/* muthur */}
        <rect className="kb-box amber" x="400" y="20" width="210" height="52" rx="5"/>
        <text className="kb-lbl" x="505" y="42" textAnchor="middle">MUTHUR</text>
        <text className="kb-sub" x="505" y="58" textAnchor="middle">main-swarm (mother) · orquestrador</text>
        <text className="kb-adr" x="602" y="16" textAnchor="end">ADR-022</text>

        {/* edges origem/muthur -> gateway */}
        <path className="kb-edge" d="M115,72 L115,100" markerEnd="url(#lp-arw)"/>
        <path className="kb-edge" d="M505,72 L505,100" markerEnd="url(#lp-arw)"/>

        {/* gateway */}
        <rect className="kb-box green" x="30" y="100" width="920" height="54" rx="5"/>
        <text className="kb-lbl" x="490" y="123" textAnchor="middle">GOVERNANCE GATEWAY</text>
        <text className="kb-sub" x="490" y="140" textAnchor="middle">OKRs · Mandates · Decisions — todo dispatch atravessa aqui</text>
        <text className="kb-adr" x="940" y="118" textAnchor="end">ADR-025 · ADR-026</text>

        {/* tier1 label */}
        <text className="kb-tl" x="30" y="180">TIER 1 · MANAGERS — DECIDEM</text>
        <text className="kb-adr" x="940" y="180" textAnchor="end">ADR-003 · ADR-022</text>

        {/* gateway -> managers */}
        <path className="kb-edge amber" d="M110,154 L110,192" markerEnd="url(#lp-arwA)"/>
        <path className="kb-edge amber" d="M300,154 L300,192" markerEnd="url(#lp-arwA)"/>
        <path className="kb-edge amber" d="M490,154 L490,192" markerEnd="url(#lp-arwA)"/>
        <path className="kb-edge amber" d="M680,154 L680,192" markerEnd="url(#lp-arwA)"/>
        <path className="kb-edge amber" d="M870,154 L870,192" markerEnd="url(#lp-arwA)"/>

        {/* managers */}
        <rect className="kb-box" x="30"  y="192" width="160" height="66" rx="5"/>
        <text className="kb-lbl" x="110" y="214" textAnchor="middle">Helena</text>
        <text className="kb-sub" x="110" y="230" textAnchor="middle">Sales OS</text>
        <text className="kb-tf"  x="110" y="248" textAnchor="middle">Sonnet · hot-path</text>

        <rect className="kb-box" x="220" y="192" width="160" height="66" rx="5"/>
        <text className="kb-lbl" x="300" y="214" textAnchor="middle">Eduardo</text>
        <text className="kb-sub" x="300" y="230" textAnchor="middle">Marketplace OS</text>
        <text className="kb-tf"  x="300" y="248" textAnchor="middle">Sonnet · hot-path</text>

        <rect className="kb-box" x="410" y="192" width="160" height="66" rx="5"/>
        <text className="kb-lbl" x="490" y="214" textAnchor="middle">Katarina</text>
        <text className="kb-sub" x="490" y="230" textAnchor="middle">Growth OS</text>
        <text className="kb-tf"  x="490" y="248" textAnchor="middle">Sonnet · hot-path</text>

        <rect className="kb-box" x="600" y="192" width="160" height="66" rx="5"/>
        <text className="kb-lbl" x="680" y="214" textAnchor="middle">Walter</text>
        <text className="kb-sub" x="680" y="230" textAnchor="middle">Operations OS</text>
        <text className="kb-tf"  x="680" y="248" textAnchor="middle">Sonnet · hot-path</text>

        <rect className="kb-box amber" x="790" y="192" width="160" height="66" rx="5"/>
        <text className="kb-lbl" x="870" y="214" textAnchor="middle">Bishop</text>
        <text className="kb-sub" x="870" y="230" textAnchor="middle">Strategy OS</text>
        <text className="kb-ta"  x="870" y="248" textAnchor="middle">Opus 4.7 · long-horizon</text>

        {/* dispatch fabric */}
        <text className="kb-flow" x="490" y="284" textAnchor="middle">fan-out · Send API (in-process) / Redis Streams (cross-deployment)</text>
        <text className="kb-adr"  x="940" y="284" textAnchor="end">ADR-002 · ADR-012</text>

        <path className="kb-edge cyan dash" d="M110,258 L110,296"/>
        <path className="kb-edge cyan dash" d="M300,258 L300,296"/>
        <path className="kb-edge cyan dash" d="M490,258 L490,296"/>
        <path className="kb-edge cyan dash" d="M680,258 L680,296"/>
        <path className="kb-edge cyan dash" d="M870,258 L870,296"/>
        <path className="kb-edge cyan" d="M110,296 L870,296"/>
        <path className="kb-edge cyan dash" d="M130,296 L130,324" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan dash" d="M370,296 L370,324" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan dash" d="M610,296 L610,324" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan dash" d="M850,296 L850,324" markerEnd="url(#lp-arwC)"/>

        {/* tier2 label */}
        <text className="kb-tl" x="30" y="318">TIER 2 · WORKERS (SYNTHETICS) — HEADLESS, SEM AUTORIDADE</text>
        <text className="kb-adr" x="940" y="318" textAnchor="end">ADR-012 · ADR-020</text>

        {/* synthetics */}
        <rect className="kb-box" x="30"  y="324" width="200" height="58" rx="5"/>
        <text className="kb-lbl" x="130" y="348" textAnchor="middle">bxsales</text>
        <text className="kb-tf"  x="130" y="366" textAnchor="middle">grafo fixo · Haiku</text>

        <rect className="kb-box" x="270" y="324" width="200" height="58" rx="5"/>
        <text className="kb-lbl" x="370" y="348" textAnchor="middle">bxcrm</text>
        <text className="kb-tf"  x="370" y="366" textAnchor="middle">grafo fixo · Haiku</text>

        <rect className="kb-box" x="510" y="324" width="200" height="58" rx="5"/>
        <text className="kb-lbl" x="610" y="348" textAnchor="middle">bxmkt</text>
        <text className="kb-tf"  x="610" y="366" textAnchor="middle">grafo fixo · Haiku</text>

        <rect className="kb-box" x="750" y="324" width="200" height="58" rx="5"/>
        <text className="kb-lbl" x="850" y="348" textAnchor="middle">bxgwt</text>
        <text className="kb-tf"  x="850" y="366" textAnchor="middle">grafo fixo · Haiku</text>

        <text className="kb-tf" x="490" y="405" textAnchor="middle">+ beatriz (SDR email) · runner (scheduler)</text>

        {/* synthetics -> MCP */}
        <path className="kb-edge cyan" d="M130,382 L130,424" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan" d="M370,382 L370,424" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan" d="M610,382 L610,424" markerEnd="url(#lp-arwC)"/>
        <path className="kb-edge cyan" d="M850,382 L850,424" markerEnd="url(#lp-arwC)"/>

        {/* MCP band */}
        <rect className="kb-box cyan" x="30" y="424" width="920" height="66" rx="5"/>
        <text className="kb-lbl" x="490" y="447" textAnchor="middle">6 MCP SERVERS · INTERFACE DE FERRAMENTAS · in-cluster</text>
        <text className="kb-sub" x="490" y="465" textAnchor="middle">fleet:8001 · memory:8002 · jira:8003 · bitbucket:8004 · governance:8005 · fipa:8006</text>
        <text className="kb-sub" x="490" y="481" textAnchor="middle">merge_pr = controle na interface (R4): destination=&apos;test&apos; + mandate constraint, fail-closed</text>
        <text className="kb-adr" x="940" y="440" textAnchor="end">ADR-026 · ADR-025</text>

        {/* MCP -> substrate */}
        <path className="kb-edge" d="M260,490 L260,524" markerEnd="url(#lp-arw)"/>
        <path className="kb-edge" d="M490,490 L490,524" markerEnd="url(#lp-arw)"/>
        <path className="kb-edge" d="M720,490 L720,524" markerEnd="url(#lp-arw)"/>

        {/* substrate */}
        <rect className="kb-box dim" x="30" y="524" width="920" height="60" rx="5"/>
        <text className="kb-lbl" x="490" y="549" textAnchor="middle">GOOGLE CLOUD · GKE · ArgoCD (GitOps) · Memorystore / Redis</text>
        <text className="kb-sub" x="490" y="567" textAnchor="middle">GKE us-east4 · Cloud Run us-east5 · project microservices-fohat · ns beenx-prod/test</text>
        <text className="kb-adr" x="940" y="540" textAnchor="end">ADR-007 · ADR-024</text>

        {/* feedback loop */}
        <path className="kb-edge amber dash" d="M950,451 C978,451 978,127 952,127" markerEnd="url(#lp-arwA)"/>
        <text className="kb-adr" x="972" y="295" textAnchor="middle" transform="rotate(90 972 295)">resultados → Decisions</text>
      </svg>

      {/* Legend */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 16, padding: "12px 16px",
        borderTop: "1px solid #2A3441", fontFamily: "ui-monospace,'SF Mono',Menlo,Consolas,monospace",
        fontSize: 11, color: "#7A8899"
      }}>
        {[
          { color: "#3B82F6", label: "controle / orquestração" },
          { color: "#60A5FA", label: "ferramentas / dados" },
          { color: "#6FBF73", label: "governança" },
          { color: "#2A3441", label: "infra / substrato" },
        ].map(({ color, label }) => (
          <span key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ display: "inline-block", width: 20, height: 0, borderTop: `2px solid ${color}` }}/>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
