import { useEffect, useRef } from "react";

function DigitalHumanPlaceholder() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-duxo-accent/10" />
      <div className="absolute inset-4 rounded-full border border-duxo-accent/15 animate-[spin_20s_linear_infinite]" style={{ borderStyle: "dashed" }} />

      {/* Glowing avatar shell */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 animate-float">
        {/* Aura */}
        <div className="absolute inset-0 rounded-full bg-duxo-accent/5 blur-3xl scale-150" />
        {/* Face circle */}
        <div className="relative w-full h-full rounded-full border border-duxo-accent/30 bg-gradient-to-b from-duxo-blue to-duxo-black overflow-hidden shadow-accent-lg flex flex-col items-center justify-end pb-6">
          {/* Scan line */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-duxo-accent/60 to-transparent animate-[scan_3s_linear_infinite]" style={{ top: "0%" }} />

          {/* Stylized face wireframe */}
          <svg viewBox="0 0 200 220" className="absolute top-4 w-40 opacity-70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Head oval */}
            <ellipse cx="100" cy="90" rx="58" ry="70" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.5" />
            {/* Face mesh lines */}
            <line x1="100" y1="20" x2="100" y2="160" stroke="#00C2FF" strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1="42" y1="90" x2="158" y2="90" stroke="#00C2FF" strokeWidth="0.5" strokeOpacity="0.2" />
            <ellipse cx="100" cy="90" rx="30" ry="38" stroke="#00C2FF" strokeWidth="0.5" strokeOpacity="0.2" />
            {/* Eyes */}
            <ellipse cx="76" cy="78" rx="10" ry="6" stroke="#00FFD1" strokeWidth="1.2" />
            <ellipse cx="124" cy="78" rx="10" ry="6" stroke="#00FFD1" strokeWidth="1.2" />
            <circle cx="76" cy="78" r="3" fill="#00FFD1" fillOpacity="0.8" />
            <circle cx="124" cy="78" r="3" fill="#00FFD1" fillOpacity="0.8" />
            {/* Nose bridge */}
            <path d="M96 84 Q100 96 96 102" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.4" />
            <path d="M104 84 Q100 96 104 102" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.4" />
            {/* Mouth */}
            <path d="M82 118 Q100 128 118 118" stroke="#00C2FF" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
            {/* Jaw */}
            <path d="M60 110 Q65 148 100 158 Q135 148 140 110" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.3" />
            {/* Neck */}
            <line x1="88" y1="158" x2="84" y2="190" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.3" />
            <line x1="112" y1="158" x2="116" y2="190" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.3" />
            <line x1="84" y1="190" x2="116" y2="190" stroke="#00C2FF" strokeWidth="0.8" strokeOpacity="0.3" />
            {/* Data points */}
            {[[76,72],[124,72],[100,102],[82,118],[118,118]].map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="1.5" fill="#00C2FF" fillOpacity="0.6" />
            ))}
          </svg>

          {/* Status pill */}
          <div className="relative z-10 flex items-center gap-1.5 bg-duxo-black/60 border border-duxo-accent/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-duxo-electric animate-pulse" />
            <span className="font-mono text-xs text-duxo-muted">AGENT LIVE</span>
          </div>
        </div>

        {/* Orbiting dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-duxo-accent shadow-accent-sm animate-orbit" />
        </div>
      </div>

      {/* Corner data chips */}
      {[
        { pos: "top-2 left-2", label: "Intent", val: "97.4%" },
        { pos: "top-2 right-2", label: "Latency", val: "180ms" },
        { pos: "bottom-8 left-2", label: "Lang", val: "100+" },
        { pos: "bottom-8 right-2", label: "Uptime", val: "99.99%" },
      ].map(({ pos, label, val }) => (
        <div
          key={label}
          className={`absolute ${pos} bg-duxo-card/80 border border-duxo-border backdrop-blur-sm rounded-lg px-2.5 py-1.5 text-center`}
        >
          <div className="font-mono text-xs text-duxo-accent font-semibold">{val}</div>
          <div className="font-body text-[10px] text-duxo-muted uppercase tracking-wider">{label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-duxo-black flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-duxo-black to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-duxo-accent/25 bg-duxo-accent/5"
              style={{ animation: "fadeUp 0.6s ease forwards", opacity: 0, animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-duxo-electric animate-pulse" />
              <span className="font-mono text-xs text-duxo-accent tracking-widest uppercase">
                Agentic Digital Presence
              </span>
            </div>

            {/* Headline */}
            <div
              style={{ animation: "fadeUp 0.7s ease forwards", opacity: 0, animationDelay: "0.2s" }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
                Human
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-duxo-accent via-duxo-electric to-duxo-accent">
                  Intelligence.
                </span>
                <br />
                Digital Scale.
              </h1>
            </div>

            {/* Why */}
            <p
              className="font-body text-duxo-muted text-lg leading-relaxed max-w-md"
              style={{ animation: "fadeUp 0.7s ease forwards", opacity: 0, animationDelay: "0.35s" }}
            >
              Traditional interfaces are friction points. Duxo.AI replaces menus and forms with{" "}
              <span className="text-white">intelligent entities</span> that see, hear, and act on
              behalf of your brand—in real time.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: "fadeUp 0.7s ease forwards", opacity: 0, animationDelay: "0.5s" }}
            >
              <a
                href="#pricing"
                className="group font-body font-semibold text-sm px-6 py-3 rounded-xl bg-duxo-accent text-duxo-black hover:bg-white transition-all duration-200 shadow-accent-sm hover:shadow-accent-md flex items-center gap-2"
              >
                Start Free
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#capabilities"
                className="font-body text-sm px-6 py-3 rounded-xl border border-duxo-border text-duxo-muted hover:text-white hover:border-duxo-accent/40 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                See it in action
              </a>
            </div>

            {/* Social proof */}
            <div
              style={{ animation: "fadeUp 0.7s ease forwards", opacity: 0, animationDelay: "0.65s" }}
            >
              <p className="font-body text-xs text-duxo-muted/60 uppercase tracking-widest mb-3">
                Trusted by Innovation Labs & Educational Institutions Worldwide
              </p>
              <div className="flex flex-wrap gap-5">
                {["Aatral Labs", "EduTech Asia", "Gov AI Initiative", "MedCore Systems"].map((org) => (
                  <span key={org} className="font-display text-sm text-duxo-muted/50 font-semibold tracking-wide">
                    {org}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Digital Human */}
          <div
            className="relative h-[420px] md:h-[540px]"
            style={{ animation: "fadeIn 1s ease forwards", opacity: 0, animationDelay: "0.3s" }}
          >
            <DigitalHumanPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
