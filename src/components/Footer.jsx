import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-800/50 py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">DX</span>
              </div>
              <span className="text-white font-bold text-lg">Duxo</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Human Intelligence. Digital Scale. Transform how your brand interacts with customers through intelligent automation.
            </p>
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {['twitter', 'linkedin', 'github'].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary-500/20 flex items-center justify-center text-neutral-400 hover:text-primary-400 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Roadmap'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-1 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-1 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Support', 'Community'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-1 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors text-sm group flex items-center gap-2">
                    <span className="w-0 group-hover:w-1 h-0.5 bg-primary-500 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800/50 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-neutral-500 text-sm">
              © 2026 Duxo.AI. All rights reserved. Built with intelligence.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-neutral-600 text-xs">Security certified:</span>
              <div className="flex gap-3">
                {['SOC2', 'ISO27001', 'GDPR'].map((cert, i) => (
                  <span key={i} className="text-neutral-500 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-white/5 border border-neutral-800 hover:border-primary-500 transition-colors cursor-pointer">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
