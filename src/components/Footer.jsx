export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-lime-400/30 py-8 px-6 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm">
        <div className="text-white/70">
          © {year} Bun Panin. All systems operational.
        </div>
        <div className="text-lime-400/70">
          Built with React.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
