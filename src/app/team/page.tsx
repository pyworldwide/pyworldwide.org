import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import Image from 'next/image';
import teamData from '@/data/teams.json';

export default function Team() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">PyWorldWide Team</h1>
            <div className="text-xl text-center mb-4 text-white">PyWorldWide meetups are organized by Python enthusiasts and volunteers from around the world!</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 font-serif relative inline-block">
            Our Volunteers
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData[0]["Our Volunteers"]?.map((member, index) => (
              <Link 
                href={member.link.url!}
                key={index}
                target={member.link.target}
                rel={member.link.rel}
                className="group h-full"
              >
                <div className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 
                  hover:-translate-x-1 hover:-translate-y-1 text-center h-full flex flex-col">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full border-2 border-black overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{member.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 font-serif">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Interested in contributing to open source and being part of our community? 
            We&apos;re always looking for passionate volunteers!
          </p>
          <Link
            href="https://app.youform.com/forms/0cvg3fws"
            className="bg-yellow-300 px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 
              transition-all duration-300 font-bold inline-block"
          >
            Become a Volunteer
          </Link>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
