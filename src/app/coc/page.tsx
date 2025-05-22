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

        <section className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
            Resources
            <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
          </h2>
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-4">Important Documentation</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <Link 
                  href="/coc/enforcement" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  Code of Conduct Enforcement Procedures
                </Link>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <Link 
                  href="/coc/reporting" 
                  className="text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  How to Report a Code of Conduct Incident
                </Link>
              </li>
        
            </ul>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}