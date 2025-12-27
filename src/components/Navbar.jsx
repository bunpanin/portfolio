import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "work", "about", "contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 border-b border-lime-400/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold font-mono tracking-wider">
            <span className="text-white">&lt;</span>
            <span className="text-lime-400">BP</span>
            <span className="text-white">/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-mono">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-white relative group ${
                  activeSection === section
                    ? "text-white"
                    : "text-lime-400"
                }`}
              >
                <span className="text-lime-400/50 mr-1">{">"}</span>
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-lime-400 animate-pulse"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-lime-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 font-mono">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left capitalize py-2 text-lime-400 hover:text-white transition-colors"
              >
                <span className="text-lime-400/50 mr-2">{">"}</span>
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
