export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-400 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-center sm:text-left">© {new Date().getFullYear()} Strange • Fan-made landing experience</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#privacy">Privacy</a>
          <a className="hover:text-white" href="#terms">Terms</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
