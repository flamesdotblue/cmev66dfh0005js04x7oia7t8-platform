import { Film, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#07080d]/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />
            <Sparkles className="relative h-6 w-6 text-yellow-400" />
          </div>
          <span className="font-semibold tracking-wide text-white">STRANGE</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#lore">Lore</a>
          <a className="hover:text-white" href="#artifacts">Artifacts</a>
          <a className="hover:text-white" href="#media">Media</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 hover:bg-yellow-400/20">
          <Film className="h-4 w-4" /> Watch Trailer
        </button>
      </div>
    </header>
  );
}
