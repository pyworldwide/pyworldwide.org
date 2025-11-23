import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';
import cocDataJson from '@/data/codeOfConduct.json';

interface CoCSection {
  title: string;
  content: string[];
}

interface CoCFile {
  sections: CoCSection[];
}

const cocData: CoCFile[] = cocDataJson as CoCFile[];

export default function CodeOfConduct() {
  const renderSectionContent = (section: CoCSection) => {
    if (section.title === "Scope" || section.title === "Inappropriate Behavior") {
      return (
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          {section.content.map((item: string, index: number) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    } else if (section.title === "Our Process") {
      return section.content.map((paragraph: string, index: number) => {
        if (paragraph.includes("info.pyworldwide+coc@gmail.com")) {
          const parts = paragraph.split("info.pyworldwide+coc@gmail.com");
          const textBeforeEmail = parts[0];
          const textAfterOriginalEmail = parts[1] ? parts[1].substring(parts[1].indexOf(" which is monitored")) : " which is monitored by the Code of Conduct team.";

          return (
            <p key={index} className="mb-4 text-gray-700">
              {textBeforeEmail}
              <a href="mailto:info.pyworldwide+coc@gmail.com" className="text-blue-600 hover:underline">
                info.pyworldwide+coc@gmail.com
              </a>
              {textAfterOriginalEmail}
            </p>
          );
        }
        if (paragraph.startsWith("In case of a conflict of interest, you can individually contact:")) {
          return (
            <p key={index} className="mb-4 text-gray-700">
              In case of a conflict of interest, you can contact{" "}
              <a href="mailto:info.pyworldwide+coc@gmail.com" className="text-blue-600 hover:underline">
                info.pyworldwide+coc@gmail.com
              </a>
              {" "}with specific mention of the conflict in your email subject.
            </p>
          );
        }
        if (paragraph.startsWith("Procedure For Reporting Code of Conduct Incidents")) {
          return (
            <p key={index} className="mb-4 text-gray-700">
              <Link href="/coc/reporting" className="text-blue-600 hover:underline">
                {paragraph.replace(/,$/, '')}
              </Link>
            </p>
          );
        }
        if (paragraph.startsWith("Enforcement procedures.")) {
          return (
            <p key={index} className="mb-4 text-gray-700">
              <Link href="/coc/enforcement" className="text-blue-600 hover:underline">
                {paragraph}
              </Link>
            </p>
          );
        }
        return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
      });
    } else if (section.title === "Consequences") {
      return section.content.map((paragraph: string, index: number) => {
        if (paragraph.includes("Enforcement Procedures")) {
          const parts = paragraph.split("Enforcement Procedures");
          return (
            <p key={index} className="mb-4 text-gray-700">
              {parts[0]}
              <Link href="/coc/enforcement" className="text-blue-600 hover:underline">
                Enforcement Procedures
              </Link>
              {parts[1]}
            </p>
          );
        }
        return <p key={index} className="mb-4 text-gray-700">{paragraph}</p>;
      });
    }
    return section.content.map((paragraph: string, index: number) => (
      <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
    ));
  };

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
          {cocData[0].sections.map((section: CoCSection, index: number) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
                {section.title}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
              </h2>
              {renderSectionContent(section)}
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
