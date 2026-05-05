import React from "react";
import heroImage from "../assets/image.png"; // ✅ FIXED (adjust path if needed)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50 to-secondary-50"></div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-accent-300 to-primary-300 rounded-full mix-blend-multiply blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="animate-slide-in-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 backdrop-blur-sm border border-primary-200 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-primary-700">
                Now Available: White-label Deployment
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-neutral-900 leading-tight animate-fade-in-up">
              Human Intelligence.
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                Digital Scale.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-neutral-700 mb-10 max-w-xl leading-relaxed animate-fade-in-up">
              Traditional interfaces are friction points. Duxo.AI replaces menus
              and forms with{" "}
              <span className="font-semibold text-neutral-900">
                Agentic Digital Presence
              </span>
              —intelligent entities that see, hear, and act on behalf of your
              brand.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up">
              
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-2xl hover:shadow-primary-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group">
                <span className="flex items-center justify-center gap-2">
                  Start Free Trial
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>

              <button className="px-8 py-4 rounded-xl border-2 border-neutral-300 text-neutral-900 font-semibold hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-neutral-700 text-sm animate-fade-in-up">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-neutral-900">500+</p>
                <p className="text-neutral-600">teams trust Duxo</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 animate-scale-in animate-pulse-glow">
              
              <img
                src={heroImage} // ✅ FIXED
                loading="lazy"
                alt="Digital Human AI"
                className="w-full h-full object-cover animate-image-zoom"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-300 to-secondary-300 rounded-full blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-secondary-300 to-accent-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

        </div>
      </div>
    </section>
  );
}