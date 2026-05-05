export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: "Product",
      links: ["Capabilities", "Pricing", "Changelog", "Roadmap"],
    },
    {
      heading: "Solutions",
      links: ["Education", "Healthcare", "Government", "Retail"],
    },
    {
      heading: "Developers",
      links: ["API Docs", "SDK", "Webhooks", "Status"],
    },
    {
      heading: "Company",
      links: ["About", "Aatral Labs", "Privacy", "Terms"],
    },
  ];

  return (
    <footer className="relative bg-duxo-navy border-t border-duxo-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-duxo-accent/10 border border-duxo-accent/30 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="6" r="3.5" stroke="#00C2FF" strokeWidth="1.5" />
                  <path d="M2 15.5c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="6" r="1" fill="#00FFD1" />
                </svg>
              </div>
              <span className="font-display font-bold text-base text-white">
                duxo<span className="text-duxo-accent">.ai</span>
              </span>
            </div>
            <p className="font-body text-xs text-duxo-muted/60 leading-relaxed">
              Human Intelligence.<br />Digital Scale.
            </p>
            <p className="font-mono text-[10px] text-duxo-muted/40 tracking-wider">
              Powered by Aatral Innovation Lab
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.heading} className="space-y-4">
              <p className="font-mono text-[10px] text-duxo-muted/50 uppercase tracking-widest">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-duxo-muted/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-duxo-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-duxo-muted/40">
            © {year} Duxo.AI — Aatral Innovation Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["SOC2", "GDPR", "HIPAA"].map((badge) => (
              <span
                key={badge}
                className="font-mono text-[9px] tracking-widest text-duxo-muted/40 border border-duxo-border rounded px-2 py-0.5"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
