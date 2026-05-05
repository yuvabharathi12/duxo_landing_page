import React from 'react';

const trustPillars = [
  {
    title: 'Identity Ethics',
    description: 'We prioritize digital sovereignty. Every "Digital Twin" is created with explicit biometric consent and blockchain-backed verification.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-primary-500 to-secondary-500'
  },
  {
    title: 'Enterprise Security',
    description: 'SOC2 compliant infrastructure with zero-data retention options for sensitive government or medical applications.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: 'from-accent-500 to-primary-500'
  },
  {
    title: 'Proven Reliability',
    description: 'Built on the Aatral Innovation Lab framework—delivering intelligent solutions for the software-first world.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-success-500 to-secondary-500'
  }
];

export default function TrustGovernance() {
  return (
    <section id="trust" className="py-24 px-6 sm:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-accent-100/80 backdrop-blur-sm border border-accent-200 mb-6">
            <span className="text-sm font-semibold text-accent-700">Enterprise Grade</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Trust & Governance
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Built with enterprise-grade security and ethical practices at the core
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustPillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:border-primary-200 transition-all duration-300 card-hover animate-fade-in-up hover:shadow-2xl hover:shadow-primary-500/10 transform hover:-translate-y-1 hover:animate-glow-pulse`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-300 animate-gradient-shift`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} p-3 mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg group-hover:shadow-xl animate-bounce-in`} style={{ animationDelay: `${index * 100 + 100}ms` }}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-primary-50/50 to-secondary-50/50 rounded-3xl border border-primary-200/50 backdrop-blur-sm p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">Certifications & Compliance</h3>
            <p className="text-neutral-600">Industry-leading security standards</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['SOC2 Certified', 'ISO 27001', 'GDPR Compliant', 'Blockchain Verified'].map((badge, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center group animate-fade-in-up cursor-pointer transform hover:scale-105 transition-all duration-300 hover:animate-bounce-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl hover:animate-pulse-glow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-neutral-800 text-sm font-bold text-center group-hover:text-primary-600 transition-colors">
                  {badge}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features List */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h4 className="text-lg font-bold text-neutral-900 mb-6">Data Protection</h4>
            <ul className="space-y-4">
              {[
                'End-to-end encryption for all data transfers',
                'Zero-knowledge architecture available',
                'GDPR, CCPA, and SOC2 compliant',
                'Regular security audits by third parties'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <h4 className="text-lg font-bold text-neutral-900 mb-6">Infrastructure</h4>
            <ul className="space-y-4">
              {[
                'Multi-region redundancy and failover',
                'Private cloud and on-premise deployment options',
                ' DDoS protection and rate limiting',
                '99.99% uptime SLA guarantee'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
