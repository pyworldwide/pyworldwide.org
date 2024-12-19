import Link from "next/link";
import "../css/style.css";
const NavButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="bg-yellow-300 px-6 py-2.5 rounded-md border-2 border-black 
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
    hover:translate-x-[2px] hover:translate-y-[2px] 
    transition-all duration-200 
    text-base font-bold
    relative overflow-hidden
    group"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute inset-0 bg-yellow-400 transform translate-y-full transition-transform duration-200 group-hover:translate-y-0" />
  </Link>
);

export default function Navbar() {
  return (
    <nav className="relative ">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 border-2 border-black rotate-45" />
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-300 border-2 border-black rotate-45" />

      <div
        className="flex flex-wrap gap-3 sm:gap-4 justify-center py-6 px-4 mx-4 
        border-2 border-black rounded-lg bg-white/10 backdrop-blur-sm"
      >
        <NavButton href="/">Home</NavButton>
        <NavButton href="/about">About</NavButton>
        <NavButton href="/team">Team</NavButton>
        <NavButton href="/events">Events</NavButton>
        {/* <NavButton href="/resources">Resources</NavButton>
        <NavButton href="https://docs.fosscu.org">Handbook</NavButton> */}
      </div>

      <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-black" />
      <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-black" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-black" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-black" />
    </nav>
  );
}
