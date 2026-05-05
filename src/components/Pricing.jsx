import React, { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    description: 'Perfect for getting started',
    features: [
      { text: '1 Active Agent', included: true },
      { text: '60 Interaction Mins', included: true },
      { text: 'Standard Knowledge Base', included: true },
      { text: 'Duxo Watermark', included: true },
      { text: 'Advanced RAG Integration', included: false },
      { text: 'White-label UI', included: false }
    ],
    cta: 'Start Free',
    highlight: false
  },
  {
    name: 'Growth',
    price: '$199',
    period: '/mo',
    description: 'For scaling teams',
    features: [
      { text: '5 Active Agents', included: true },
      { text: '300 Interaction Mins', included: true },
      { text: 'Advanced RAG Integration', included: true },
      { text: 'White-label UI', included: true },
      { text: 'Dedicated Support', included: false },
      { text: 'Private Cloud / On-Prem', included: false }
    ],
    cta: 'Scale Now',
    highlight: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For enterprise needs',
    features: [
      { text: 'Unlimited Agents', included: true },
      { text: 'Custom Volume', included: true },
      { text: 'Private Cloud / On-Prem', included: true },
      { text: 'Dedicated Support', included: true },
      { text: 'Custom Integrations', included: true },
      { text: 'SLA Guarantee', included: true }
    ],
    cta: 'Contact Sales',
    highlight: false
  }
];

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  return (
    <section id="pricing" className="py-24 px-6 sm:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary-50 to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-secondary-100/80 backdrop-blur-sm border border-secondary-200 mb-6">
            <span className="text-sm font-semibold text-secondary-700">Flexible Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-neutral-600">
            Choose the Duxo tier that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-2xl transition-all duration-300 animate-fade-in-up ${
                plan.highlight
                  ? 'md:scale-105 ring-2 ring-primary-500 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 backdrop-blur-sm shadow-2xl shadow-primary-500/20 animate-pulse-glow hover:animate-bounce-in'
                  : hoveredPlan === index
                  ? 'ring-2 ring-primary-500/50 bg-white/80 backdrop-blur-sm shadow-xl shadow-primary-500/10 animate-bounce-in'
                  : 'ring-1 ring-white/60 bg-white/50 backdrop-blur-sm hover:ring-primary-500/50 hover:animate-glow-pulse'
              }`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="p-10">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-8">
                  {plan.description}
                </p>

                <div className="mb-10">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-neutral-600 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-bold mb-10 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-2xl hover:shadow-primary-500/40'
                      : 'border-2 border-neutral-300 text-neutral-900 hover:border-primary-500 hover:bg-primary-50'
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4 border-t border-neutral-200/50 pt-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-success-400 to-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-neutral-300/50 flex-shrink-0 mt-0.5"></div>
                      )}
                      <span className={`text-sm font-medium ${feature.included ? 'text-neutral-800' : 'text-neutral-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-neutral-600">
            All plans include a 14-day free trial. 
            <a href="#" className="ml-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              Compare features →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
