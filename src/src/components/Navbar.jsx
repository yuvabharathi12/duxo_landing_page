import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Capabilities", "Use Cases", "Pricing", "Trust"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-duxo-navy/90 backdrop-blur-xl border-b border-duxo-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-duxo-accent/10 border border-duxo-accent/30 flex items-center justify-center group-hover:shadow-accent-sm transition-all">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="6" r="3.5" stroke="#00C2FF" strokeWidth="1.5" />
              <path d="M2 15.5c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#00C2FF" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="6" r="1" fill="#00FFD1" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-white">
            duxo<span className="text-duxo-accent">.ai</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-duxo-muted hover:text-white transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="font-body text-sm text-duxo-muted hover:text-white transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="font-body text-sm px-4 py-2 rounded-lg bg-duxo-accent text-duxo-black font-semibold hover:bg-white transition-all duration-200 shadow-accent-sm"
          >
            Start Free
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-duxo-muted hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-duxo-navy/95 backdrop-blur-xl border-b border-duxo-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-duxo-muted hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#pricing"
            className="font-body text-sm px-4 py-2 rounded-lg bg-duxo-accent text-duxo-black font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Start Free
          </a>
        </div>
      )}
    </nav>
  );
}
