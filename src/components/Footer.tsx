import Link from 'next/link';
import "../css/squiggle.css"

const footerLinks = {
  community: [
    { name: "Join Us", href: "" },
    { name: "Contribute", href: "https://github.com/pyworldwide" },
    { name: "Core Values", href: "" },
    { name: "Code of Conduct", href: "/coc" },
  ],
  resources: [
    { name: "Docs", href: "" },
    { name: "Guides", href: "" },
    { name: "Blog", href: "" },
    { name: "FAQ", href: "" },
  ],
  about: [
    { name: "About Us", href: "" },
    { name: "What is FOSS", href: "" },
    { name: "API Status", href: "" },
    { name: "Terms", href: "" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/pyworldwide" },
    { name: "Twitter", href: "" },
    { name: "Discord", href: "" },
    { name: "LinkedIn", href: "" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#069668] squiggle-bottom">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-20 mb-8 md:mb-12">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-white md:ml-14">PyWorldWide</h3>
            <p className="text-white md:ml-14">
            An online meetup community for Python enthusiasts of all levels, from beginners to experts.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className='md:ml-14'>
              <h3 className="text-lg font-bold mb-4 capitalize text-white">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white -ml-4 hover:text-black hover:underline decoration-2 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-black pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-base md:text-lg">
            Made with <span className="text-green-600">💚</span> and Open Source
          </div>

          <div className="flex gap-4 md:gap-6">
            <Link href="https://github.com/pyworldwide" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
            <Link href="" className="hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
          </div>

          <div className="text-xs md:text-sm text-gray-700">
            © {new Date().getFullYear()} PyWorldWide. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}