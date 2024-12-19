"use client";

import { useState } from "react";
import "../css/squiggle.css"
export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
  };

  return (
    <section className="mt-20 relative">
      <div className="bg-[#069668] pt-16 pb-16  squiggle-top">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4 font-serif">
              Join Our Newsletter!
            </h2>
            <p className="text-xl mb-8">
              Stay updated with our latest events, projects, and community
              updates and everything around open source. Subscribe to our
              newsletter!
            </p>

            <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-6 justify-center">
                <span className="text-black font-medium">
                  <b>PyWorldWide 🐍</b> Weekly Updates ⏳
                </span>
                <span className="text-gray-500 ml-auto"></span>
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#ffb4b4] px-6 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] 
                    transition-all font-bold text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <p className="text-sm mt-4 opacity-90">
              We&apos;ll send you our best community content and updates every week.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
