'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import { upcomingEvents } from '@/data/events';
import convertToLocalTime from '../../utils/convertToLocalTime';

// Extend the event type to include converted time properties
type EventWithLocalTime = typeof upcomingEvents[0] & {
  localDate?: string;
  localTime?: string;
};

export default function Events() {
  const [convertedEvents, setConvertedEvents] = useState<EventWithLocalTime[]>(upcomingEvents);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);
    
    // Convert all event times to local timezone
    const eventsWithLocalTime: EventWithLocalTime[] = upcomingEvents.map(event => {
      const converted = convertToLocalTime(event.date, event.time);
      return {
        ...event,
        localDate: converted.date,
        localTime: converted.time
      };
    });
    
    setConvertedEvents(eventsWithLocalTime);
  }, []);

  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">PyWorldWide Events and Meetups</h1>
            <div className="text-xl text-center mb-4 text-white ml-2">Where Ideas Set Sail 🚢</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
                Our Events
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
              </h2>
            </div>

            <div className="space-y-6 mt-8">
              {convertedEvents.map((event) => (
                <div 
                  key={event.id}
                  className="border-2 border-black rounded-lg p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                    transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 bg-white"
                >
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <div className="space-y-1 text-gray-600">
                        <p className="flex items-center gap-2">
                          <span>📅</span> 
                          {isClient && event.localDate ? event.localDate : event.date}
                          {!isClient && (
                            <span className="text-xs text-gray-400 ml-2">(converting to your timezone...)</span>
                          )}
                        </p>
                        <p className="flex items-center gap-2">
                          <span>⏰</span> 
                          {isClient && event.localTime ? event.localTime : event.time}
                        </p>
                        <p className="flex items-center gap-2">
                          <span>📍</span> {event.location}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={event.registrationLink}
                      className="bg-yellow-300 px-6 py-2 rounded-md border-2 border-black 
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                        hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 font-bold"
                    >
                      Register Now
                    </Link>
                  </div>
                  <p className="mt-4 text-gray-700">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}