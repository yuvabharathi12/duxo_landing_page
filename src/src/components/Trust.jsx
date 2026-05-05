const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 3.75-4.5" strokeOpacity="0.6" />
      </svg>
    ),
    title: "Identity Ethics",
    subtitle: "Digital Sovereignty First",
    body: "Every Digital Twin is created with explicit biometric consent and blockchain-backed verification. Your brand's voice, your persona, your data—protected by cryptographic proof.",
    tags: ["Biometric Consent", "Blockchain Verified", "GDPR Compliant"],
    accent: "duxo-electric",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Enterprise Security",
    subtitle: "SOC2 Compliant Infrastructure",
    body: "Zero-data retention options for sensitive government or medical applications. Our infrastructure is built for the most demanding compliance environments, including HIPAA and ISO 27001.",
    tags: ["SOC2 Type II", "HIPAA Ready", "Zero Data Retention"],
    accent: "duxo-accent",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "Proven Reliability",
    subtitle: "Aatral Innovation Lab Framework",
    body: "Built on the Aatral Innovation Lab framework—delivering intelligent solutions for the software-first world. Trusted by enterprises across education, healthcare, and public services.",
    tags: ["Aatral Framework", "99.99% Uptime", "Enterprise Proven"],
    accent: "purple-400",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="relative bg-duxo-black py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-duxo-border to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-duxo-accent/5 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-duxo-border bg-duxo-card text-xs font-mono text-duxo-muted tracking-widest uppercase">
            Trust & Governance
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Built for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-duxo-electric to-duxo-accent">
              most critical environments.
            </span>
          </h2>
          <p className="font-body text-duxo-muted text-lg max-w-xl mx-auto">
            From government deployments to medical consultations—Duxo is engineered for trust at every layer.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-duxo-border hover:border-duxo-accent/30 bg-duxo-card p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-duxo-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className={`mb-5 text-${pillar.accent} p-3 rounded-xl border border-duxo-border bg-duxo-blue/30 w-fit`}>
                {pillar.icon}
              </div>

              {/* Text */}
              <div className="space-y-2 mb-5">
                <p className={`font-mono text-xs tracking-widest text-${pillar.accent} opacity-70 uppercase`}>
                  {pillar.subtitle}
                </p>
                <h3 className="font-display text-xl font-bold text-white">{pillar.title}</h3>
                <p className="font-body text-sm text-duxo-muted leading-relaxed">{pillar.body}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-duxo-border">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider text-duxo-muted/60 border border-duxo-border rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 rounded-2xl border border-duxo-accent/20 bg-gradient-to-r from-duxo-card via-duxo-blue to-duxo-card p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-white">
              Ready to deploy your first Digital Human?
            </h3>
            <p className="font-body text-duxo-muted text-sm">
              No credit card required. Your first agent goes live in under 10 minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="font-body text-sm font-semibold px-6 py-3 rounded-xl bg-duxo-accent text-duxo-black hover:bg-white transition-all shadow-accent-sm whitespace-nowrap"
            >
              Start Free Today
            </a>
            <a
              href="mailto:sales@duxo.ai"
              className="font-body text-sm font-semibold px-6 py-3 rounded-xl border border-duxo-border text-duxo-muted hover:text-white hover:border-duxo-accent/40 transition-all whitespace-nowrap"
            >
              Talk to Sales →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
