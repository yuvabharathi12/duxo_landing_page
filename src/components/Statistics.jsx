import React from 'react';

const stats = [
  {
    number: '500+',
    label: 'Enterprise Clients',
    description: 'Leading companies worldwide trust Duxo'
  },
  {
    number: '50M+',
    label: 'Conversations/Year',
    description: 'Intelligent AI interactions delivered'
  },
  {
    number: '100+',
    label: 'Languages',
    description: 'Global reach with cultural nuance'
  },
  {
    number: '99.99%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability'
  }
];

export default function Statistics() {
  return (
    <section className="py-32 px-6 sm:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob" style={{ animationDelay: '0ms' }}></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Proven at Scale
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted by Fortune 500 companies to deliver intelligent automation at enterprise scale
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl bg-white/50 backdrop-blur-sm border border-white/60 hover:border-primary-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/15 animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-300"></div>

              <div className="relative z-10">
                {/* Number */}
                <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 group-hover:text-transparent transition-all duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <p className="text-lg text-neutral-600 mb-8">
            Ready to scale with Duxo?
          </p>
          <button className="px-10 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
