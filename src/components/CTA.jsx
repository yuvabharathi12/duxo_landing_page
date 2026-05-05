import React from 'react';

export default function CTA() {
  return (
    <section className="py-24 px-6 sm:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-accent-100/80 backdrop-blur-sm border border-accent-200 mb-6">
            <span className="text-sm font-semibold text-accent-700">Ready to Transform?</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Experience the Future of
          <br />
          <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </h2>
        
        <p className="text-lg sm:text-xl text-neutral-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Deploy your first Agentic Digital Presence in minutes. No coding required. Start with a 14-day free trial and experience how Duxo.AI can transform your customer interactions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group flex items-center justify-center gap-2 animate-bounce-in hover:animate-pulse-glow">
            Start Your Free Trial
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 rounded-xl border-2 border-primary-300 text-neutral-900 font-bold hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 hover:animate-glow-pulse">
            Schedule a Demo
          </button>
        </div>

        <p className="text-neutral-600 text-sm animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          ✓ No credit card required • 14-day free trial • Full access to all features
        </p>

        {/* Social proof stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 pt-16 border-t border-neutral-200/50 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          {[
            { number: '500+', label: 'Teams Trust Duxo' },
            { number: '100K+', label: 'AI Conversations/Month' },
            { number: '99.99%', label: 'Uptime SLA' }
          ].map((stat, i) => (
            <div key={i} className="group animate-bounce-in hover:animate-tilt" style={{ animationDelay: `${i * 100}ms` }}>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent group-hover:text-primary-600 transition-all animate-gradient-shift">
                {stat.number}
              </p>
              <p className="text-neutral-600 text-sm mt-2 group-hover:text-neutral-900 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
