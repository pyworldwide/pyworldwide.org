import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import Image from 'next/image';
import teamData from '@/data/teams.json';
import cocData from '@/data/codeOfConduct.json';

export default function CodeOfConduct() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">Code of Conduct</h1>
            <div className="text-xl text-center mb-4 text-white">PyWorldWide is a community conference intended for networking and collaboration. We aim to provide a safe, inclusive, welcoming, and harassment-free for everyone in our community.</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-20 prose lg:prose-lg max-w-4xl mx-auto">
          {cocData[0].sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>

 


      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}