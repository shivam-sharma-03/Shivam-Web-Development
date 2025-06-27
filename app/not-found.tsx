// app/not-found.tsx
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: '404 - Page Not Found | Shivam Web Development',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 text-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, rgba(137, 44, 220, 0.05) 0%, rgba(10, 0, 26, 1) 70%)',
      }}
    >
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#892CDC] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#44188c] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"
      />

      <div className="relative z-10 p-8 rounded-xl bg-black bg-opacity-20 backdrop-blur-sm border border-[#892CDC]/30 shadow-2xl">
        <h1
          className="text-6xl md:text-9xl font-extrabold text-[#892CDC] mb-4 drop-shadow-[0_0_10px_rgba(137,44,220,0.7)]"
        >
          404
        </h1>
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 text-[#f8f4fb]"
        >
          Path Not Found
        </h2>
        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto"
        >
          Oops! The digital route you were navigating seems to have led nowhere.
          Perhaps it&apos;s off getting a cup of coffee and forgot to update its GPS.
          Don&apos;t worry, let&apos;s get you back on track.
        </p>
        <div>
          <Link
            href="/"
            className="inline-block bg-[#892CDC] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#700B97] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#892CDC]/50 text-lg"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}