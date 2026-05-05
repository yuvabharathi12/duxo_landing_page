import React from 'react';

const services = [
  {
    title: 'Real-Time Reasoning',
    description: 'Process intent instantly for fluid, unscripted conversations that feel natural.',
    icon: '⚡',
    color: 'from-primary-500 to-secondary-500',
    gradient: 'from-primary-50 to-primary-100'
  },
  {
    title: 'Enterprise Knowledge RAG',
    description: 'Connect to private data sources for hallucination-free, expert-level interactions.',
    icon: '🧠',
    color: 'from-secondary-500 to-accent-500',
    gradient: 'from-secondary-50 to-secondary-100'
  },
  {
    title: 'Actionable Workflows',
    description: 'Trigger API calls, book meetings, update CRM directly from video interface.',
    icon: '🔗',
    color: 'from-accent-500 to-primary-500',
    gradient: 'from-accent-50 to-accent-100'
  },
  {
    title: 'Global Presence',
    description: 'Localize instantly with 100+ languages and culturally nuanced non-verbal cues.',
    icon: '🌐',
    color: 'from-success-500 to-secondary-500',
    gradient: 'from-success-50 to-success-100'
  }
];

export default function FeaturedServices() {
  return (
    <section className="py-32 px-6 sm:px-8 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 mb-6 text-sm font-semibold text-primary-700 animate-fade-in" style={{ animationDelay: '100ms' }}>
            CAPABILITIES
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight">
            Everything Your AI Needs
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive capabilities built for enterprise-grade digital presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} border border-white/60 backdrop-blur-sm p-10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20 animate-fade-in-up hover:animate-pulse-glow`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-all duration-300 animate-gradient-shift`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 animate-bounce-in" style={{ animationDelay: `${index * 150 + 300}ms` }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-700 leading-relaxed group-hover:text-neutral-800 transition-colors">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-8 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2 animate-slide-up">
                  Explore
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s infinite'
              }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
