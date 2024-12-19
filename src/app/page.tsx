import Navbar from '@/components/Navbar';
import WhatWeDo from '@/components/WhatWeDo';
import Topics from '@/components/Topics';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import "../css/squiggle.css"
export default function Home() {
  return (
    <div className="min-h-screen">
      <header>
        <div className="bg-header squiggle-bottom">
          <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-4xl font-bold text-center mb-4 text-white font-serif">PyWorldWide</h1>
            <div className="text-xl text-center mb-4 text-white">PyWorldWide is an online meetup community for Python enthusiasts of all levels, from beginners to experts.</div>
            <Navbar />
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <WhatWeDo />
        {/* <Topics /> */}
      </main>
      <Newsletter />
      <Footer />
      <div className="h-6"></div>


    </div>
  );
}