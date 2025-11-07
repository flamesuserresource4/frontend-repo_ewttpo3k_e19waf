import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-3xl p-10 border border-gray-100 bg-white shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Ready to build with wello?</h3>
          <p className="mt-3 text-gray-600">Start your 14-day free trial. No credit card required.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3"
          >
            <input
              type="email"
              required
              placeholder="Enter your work email"
              className="w-full rounded-md border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <button
              type="submit"
              className="rounded-md px-6 py-3 text-white font-medium shadow-sm"
              style={{ backgroundColor: '#FE6A3C' }}
            >
              Get started
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By signing up you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
}
