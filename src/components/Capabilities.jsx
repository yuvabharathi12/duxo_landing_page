import React from 'react';

const capabilities = [
  {
    title: 'Real-Time Reasoning',
    description: 'Unlike static video bots, Duxo agents process intent in real-time, allowing for fluid, unscripted conversations that feel natural.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-primary-500 to-secondary-500'
  },
  {
    title: 'Enterprise Knowledge RAG',
    description: 'Connect your digital humans to your private data (SharePoint, Notion, or custom APIs) for hallucination-free, expert-level interactions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-secondary-500 to-accent-500'
  },
  {
    title: 'Actionable Workflows',
    description: 'Give your agents "hands." Duxo can trigger API calls, book meetings, or update your CRM directly from the video interface.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    color: 'from-accent-500 to-primary-500'
  },
  {
    title: 'Global Presence',
    description: 'Instantly localize your brand with 100+ languages and culturally nuanced non-verbal cues.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20H3m13-5h2m0 0h2" />
      </svg>
    ),
    color: 'from-success-500 to-secondary-500'
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 sm:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 mb-6">
            <span className="text-sm font-semibold text-primary-700">What Makes Us Different</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            The Agentic Difference
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Sophisticated capabilities that redefine how brands interact with their customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:border-primary-200 transition-all duration-300 animate-fade-in-up hover:shadow-2xl hover:shadow-primary-500/10 transform hover:-translate-y-1 hover:animate-glow-pulse"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-all duration-300 animate-gradient-shift`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cap.color} p-3 mb-6 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg group-hover:shadow-xl animate-bounce-in`} style={{ animationDelay: `${index * 150 + 300}ms` }}>
                  {cap.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-secondary-600 transition-all duration-300">
                  {cap.title}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                  {cap.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
