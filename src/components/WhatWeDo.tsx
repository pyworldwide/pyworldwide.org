import Link from 'next/link';

const activities = [
  {
    title: "Annual PyWorldWide Conf",
    description: "Our flagship conference bringing together open source enthusiasts",
    icon: "🎪"
  },
  {
    title: "Community Events",
    description: "Regular online meetups to foster collaboration among Pythonistas",
    icon: "🤝"
  },
  {
    title: "Open Source Contributions",
    description: "Active participation in global Python open source projects",
    icon: "🌟"
  },
  {
    title: "Community Workshops",
    description: "Hands-on learning sessions for Python skill development",
    icon: "🛠️"
  }
];

export default function WhatWeDo() {
  return (
    <section className="grid gap-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 font-serif relative inline-block">
          What We Do
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 transform -rotate-1"></div>
        </h2>
        <p className="text-xl mb-8 text-gray-700">Empowering the Python Community World Wide 🌏</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {activities.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-lg border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-700 text-lg">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-6 justify-center mt-12">
        <Link
          href="/events"
          className="bg-yellow-300 px-12 py-4 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 font-bold text-lg transform hover:rotate-1"
        >
          Upcoming Meetups
        </Link>
        <Link
          href="/about"
          className="bg-white px-12 py-4 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 font-bold text-lg transform hover:-rotate-1"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}