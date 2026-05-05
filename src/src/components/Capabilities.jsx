import { useState } from "react";

const capabilities = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    title: "Real-Time Reasoning",
    tag: "CONVERSATIONAL AI",
    desc: "Unlike static video bots, Duxo agents process intent in real-time, allowing for fluid, unscripted conversations that feel genuinely natural—no decision trees, no dead ends.",
    metric: "180ms avg. response",
    color: "from-duxo-accent/20 to-transparent",
    accent: "text-duxo-accent",
    border: "border-duxo-accent/20 hover:border-duxo-accent/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125m0 5.625c0 2.278 3.694 4.125 8.25 4.125s8.25-1.847 8.25-4.125" />
      </svg>
    ),
    title: "Enterprise Knowledge RAG",
    tag: "PRIVATE DATA",
    desc: "Connect your digital humans to your private data—SharePoint, Notion, or custom APIs—for hallucination-free, expert-level interactions grounded in your source of truth.",
    metric: "Zero hallucinations",
    color: "from-duxo-electric/15 to-transparent",
    accent: "text-duxo-electric",
    border: "border-duxo-electric/20 hover:border-duxo-electric/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Actionable Workflows",
    tag: "AGENTIC HANDS",
    desc: "Give your agents hands. Duxo can trigger API calls, book meetings, or update your CRM directly from the video interface—turning conversation into action, instantly.",
    metric: "50+ native integrations",
    color: "from-orange-500/15 to-transparent",
    accent: "text-orange-400",
    border: "border-orange-500/20 hover:border-orange-400/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Global Presence",
    tag: "LOCALIZATION",
    desc: "Instantly localize your brand with 100+ languages and culturally nuanced non-verbal cues. Your digital human adapts not just what it says—but how it says it.",
    metric: "100+ languages",
    color: "from-purple-500/15 to-transparent",
    accent: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-400/50",
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(null);

  return (
    <section id="capabilities" className="relative bg-duxo-black py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-duxo-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-duxo-border bg-duxo-card text-xs font-mono text-duxo-muted tracking-widest uppercase">
            The Agentic Difference
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Not features.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-duxo-accent to-duxo-electric">
              Capabilities.
            </span>
          </h2>
          <p className="font-body text-duxo-muted text-lg max-w-xl mx-auto">
            Purpose-built for brands that refuse to settle for static, scripted experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`group relative rounded-2xl border bg-duxo-card p-7 cursor-pointer transition-all duration-300 ${cap.border} overflow-hidden`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Top row */}
              <div className="relative flex items-start justify-between mb-5">
                <div className={`p-2.5 rounded-xl border border-duxo-border bg-duxo-blue/50 ${cap.accent}`}>
                  {cap.icon}
                </div>
                <span className={`font-mono text-[10px] tracking-widest ${cap.accent} opacity-60 mt-1`}>
                  {cap.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="font-display text-xl font-bold text-white">{cap.title}</h3>
                <p className="font-body text-duxo-muted text-sm leading-relaxed">{cap.desc}</p>
              </div>

              {/* Metric */}
              <div className="relative mt-6 pt-5 border-t border-duxo-border flex items-center justify-between">
                <span className={`font-mono text-sm font-semibold ${cap.accent}`}>{cap.metric}</span>
                <svg
                  className={`w-4 h-4 ${cap.accent} group-hover:translate-x-1 transition-transform`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

              {/* Active indicator */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${cap.accent.replace("text-", "via-")} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
