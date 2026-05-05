import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-primary-500/5 border-b border-neutral-200/50' 
        : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="w-8 sm:w-9 h-8 sm:h-9 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-110 hover:animate-pulse-glow">
            <span className="text-white font-bold text-xs sm:text-sm">DX</span>
          </div>
          <span className="text-neutral-900 font-bold text-lg sm:text-xl bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent hover:animate-gradient-shift">Duxo</span>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[60] p-2.5 sm:p-3 rounded-lg hover:bg-primary-100/50 transition-all duration-200 flex items-center justify-center touch-target"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg 
            className={`w-6 h-6 sm:w-7 sm:h-7 text-neutral-900 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Capabilities', 'Pricing', 'Trust'].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`} 
              className="text-neutral-700 hover:text-primary-600 font-medium transition-all duration-300 relative group animate-fade-in animate-slide-down"
              style={{ animationDelay: `${50 + i * 100}ms` }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300 group-hover:animate-shimmer"></span>
            </a>
          ))}
          <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-fade-in animate-bounce-in hover:animate-pulse-glow"
            style={{ animationDelay: '350ms' }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                <span className="text-lg font-semibold text-neutral-900">Menu</span>
                {/* Close button handled by the main hamburger button which is z-60 */}
                <div className="w-10 h-10"></div> {/* Spacer for the z-60 button */}
              </div>

              {/* Menu Items */}
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <div className="flex flex-col gap-2">
                  {['Capabilities', 'Pricing', 'Trust'].map((item, i) => (
                    <a
                      key={i}
                      href={`#${item.toLowerCase()}`}
                      className="px-4 py-3 text-base text-neutral-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200 rounded-lg touch-target"
                      onClick={handleLinkClick}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-4 border-t border-neutral-100">
                <button className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-base hover:shadow-lg transition-all duration-300 transform active:scale-95 touch-target">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
