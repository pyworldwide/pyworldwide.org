import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Link from 'next/link';

export default function Resources() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">Resources</h1>
            <div className="text-xl text-center mb-4 text-white">Learning Resources & Documentation</div>
            <Navbar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
            <div className="text-6xl mb-6 animate-bounce">🏗️</div>
            
            <h2 className="text-3xl font-bold mb-6 font-serif relative inline-block">
              Under Construction
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              We&apos;re working hard to build comprehensive resources for our community. 
              Check back soon for guides, documentation, and learning materials!
            </p>

            <div className="w-full max-w-md mx-auto mb-8">
              <div className="h-4 bg-gray-100 rounded-full border-2 border-black">
                <div className="h-full w-[60%] bg-yellow-300 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 animate-shimmer"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">60% Complete</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/FOSS-Community"
                className="bg-yellow-300 px-6 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] 
                  transition-all duration-200 font-bold"
              >
                Check Our GitHub
              </Link>
              <Link
                href="https://dub.sh/fosscu"
                className="bg-white px-6 py-3 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] 
                  transition-all duration-200 font-bold"
              >
                Join Discord
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Documentation", icon: "📚", desc: "Comprehensive guides and tutorials" },
              { title: "Learning Paths", icon: "🎯", desc: "Structured learning resources" },
              { title: "Code Examples", icon: "💻", desc: "Real-world implementation samples" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                  opacity-75 cursor-not-allowed"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
                <div className="mt-4 text-sm text-yellow-600 font-medium">Coming Soon</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}