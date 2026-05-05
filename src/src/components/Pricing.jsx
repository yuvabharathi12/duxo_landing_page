const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    tag: null,
    desc: "Perfect for exploring Duxo's potential. Ship your first digital human in hours.",
    cta: "Start Free",
    ctaHref: "#",
    ctaStyle: "border",
    features: [
      { label: "1 Active Agent", yes: true },
      { label: "60 Interaction Minutes", yes: true },
      { label: "Standard Knowledge Base", yes: true },
      { label: "Duxo Watermark", yes: true, note: "branded" },
      { label: "Advanced RAG Integration", yes: false },
      { label: "White-label UI", yes: false },
      { label: "Dedicated Support", yes: false },
    ],
  },
  {
    name: "Growth",
    price: "$199",
    period: "/mo",
    tag: "Most Popular",
    desc: "For teams ready to scale across customer touchpoints with full brand control.",
    cta: "Scale Now",
    ctaHref: "#",
    ctaStyle: "accent",
    features: [
      { label: "5 Active Agents", yes: true },
      { label: "300 Interaction Minutes", yes: true },
      { label: "Standard Knowledge Base", yes: true },
      { label: "Advanced RAG Integration", yes: true },
      { label: "White-label UI", yes: true },
      { label: "Duxo Watermark", yes: false, note: "removed" },
      { label: "Dedicated Support", yes: false },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tag: "Full Control",
    desc: "Private cloud, on-prem deployments, and bespoke SLAs for regulated industries.",
    cta: "Contact Sales",
    ctaHref: "#",
    ctaStyle: "ghost",
    features: [
      { label: "Unlimited Agents", yes: true },
      { label: "Custom Volume", yes: true },
      { label: "Private Cloud / On-Prem", yes: true },
      { label: "Advanced RAG Integration", yes: true },
      { label: "White-label UI", yes: true },
      { label: "Dedicated Support", yes: true },
      { label: "Custom SLA & Compliance", yes: true },
    ],
  },
];

function Check({ yes }) {
  if (yes) {
    return (
      <span className="w-5 h-5 rounded-full bg-duxo-accent/10 border border-duxo-accent/30 flex items-center justify-center flex-shrink-0">
        <svg className="w-2.5 h-2.5 text-duxo-accent" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
    );
  }
  return (
    <span className="w-5 h-5 rounded-full bg-duxo-border/30 flex items-center justify-center flex-shrink-0">
      <span className="w-2.5 h-px bg-duxo-muted/30 rounded" />
    </span>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-duxo-navy py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-duxo-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-duxo-border bg-duxo-card text-xs font-mono text-duxo-muted tracking-widest uppercase">
            Pricing
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            The Duxo Tiers
          </h2>
          <p className="font-body text-duxo-muted text-lg max-w-xl mx-auto">
            Start with one agent. Scale to unlimited. Every tier includes our core real-time reasoning engine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                plan.name === "Growth"
                  ? "border-duxo-accent/40 bg-gradient-to-b from-duxo-card to-duxo-blue shadow-accent-md scale-[1.02]"
                  : "border-duxo-border bg-duxo-card hover:border-duxo-accent/25"
              }`}
            >
              {/* Top accent line for Growth */}
              {plan.name === "Growth" && (
                <div className="h-px bg-gradient-to-r from-transparent via-duxo-accent to-transparent" />
              )}

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-display text-lg font-bold text-white">{plan.name}</span>
                      {plan.tag && (
                        <span className="font-mono text-[9px] tracking-widest text-duxo-black bg-duxo-accent rounded-full px-2 py-0.5 uppercase font-bold">
                          {plan.tag}
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-duxo-muted leading-relaxed max-w-[200px]">{plan.desc}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-7">
                  <span className={`font-display text-4xl font-bold ${plan.name === "Growth" ? "text-duxo-accent" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className="font-body text-sm text-duxo-muted">{plan.period}</span>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`block text-center font-body text-sm font-semibold px-5 py-2.5 rounded-xl mb-7 transition-all duration-200 ${
                    plan.ctaStyle === "accent"
                      ? "bg-duxo-accent text-duxo-black hover:bg-white shadow-accent-sm"
                      : plan.ctaStyle === "border"
                      ? "border border-duxo-border text-duxo-muted hover:text-white hover:border-duxo-accent/40"
                      : "border border-duxo-border text-duxo-muted hover:text-white hover:border-duxo-accent/40"
                  }`}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <Check yes={f.yes} />
                      <span className={`font-body text-sm ${f.yes ? "text-duxo-muted" : "text-duxo-muted/40"}`}>
                        {f.label}
                        {f.note && (
                          <span className={`ml-1 text-xs ${f.yes ? "text-duxo-accent/60" : "text-duxo-muted/30"}`}>
                            ({f.note})
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center font-body text-xs text-duxo-muted/50 mt-10">
          All plans include AES-256 encryption · 99.9% SLA · 24/7 infrastructure monitoring
        </p>
      </div>
    </section>
  );
}
