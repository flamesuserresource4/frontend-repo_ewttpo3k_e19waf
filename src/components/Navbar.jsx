import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md" style={{ backgroundColor: '#FE6A3C' }} />
          <span className="text-2xl font-semibold tracking-tight">wello</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 rounded-md text-white font-medium shadow-sm"
            style={{ backgroundColor: '#FE6A3C' }}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
