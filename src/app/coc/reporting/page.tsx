import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import cocProcedures from '@/data/cocProcedures.json';

export default function CodeOfConductReporting() {
  const reportingData = cocProcedures.reporting;

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
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
              {reportingData.title}
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
            </h2>
            <p className="mb-6 text-gray-700">{reportingData.description}</p>
          </div>

          {reportingData.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
              </h2>
              
              {section.content && section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
              
              {section.list && (
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                  {section.list.map((item, iIndex) => (
                    <li key={iIndex} className="mb-2">{item}</li>
                  ))}
                </ul>
              )}
              
              {section.additionalContent && section.additionalContent.map((paragraph, pIndex) => (
                <p key={`additional-${pIndex}`} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
            </div>
          ))}
        </section>

        <div className="text-center mb-16">
          <Link 
            href="/coc"
            className="bg-yellow-300 px-8 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
              hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 
              transition-all duration-300 font-bold inline-block"
          >
            Back to Code of Conduct
          </Link>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}