import React from 'react';
import { Rocket, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    desc: 'Streamlined workflows and best-in-class tooling help you ship in days, not weeks.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Enterprise-grade security baked in from day one to protect your customers and data.',
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    desc: 'Optimized across the stack to deliver snappy, delightful experiences at scale.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to move faster</h2>
          <p className="mt-4 text-gray-600">Powerful building blocks that just work together so your team can focus on what matters.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow bg-white">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#FFF2EE' }}>
                <Icon className="h-6 w-6" style={{ color: '#FE6A3C' }} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
