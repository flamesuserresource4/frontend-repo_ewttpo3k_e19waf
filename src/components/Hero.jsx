import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">Build modern experiences with <span style={{ color: '#FE6A3C' }}>wello</span></h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          A clean, fast, and flexible platform for digital-first teams. Design, launch, and scale your products with confidence.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-5 py-3 rounded-md text-white font-medium shadow-md"
            style={{ backgroundColor: '#FE6A3C' }}
          >
            Start free trial
          </a>
          <a
            href="#features"
            className="px-5 py-3 rounded-md border border-gray-200 text-gray-900 font-medium bg-white/70 backdrop-blur hover:bg-white transition"
          >
            See features
          </a>
        </div>
      </div>
    </section>
  );
}
