import { useEffect, useState } from "react";

export default function Hero() {
  const texts = [
    "BACKEND DEVELOPER",
    "JAVA SPRING BOOT",
    "DEVOPS ENTHUSIAST",
  ];

  const [glitchText, setGlitchText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (charIndex < texts[textIndex].length) {
        setGlitchText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setGlitchText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, textIndex]);

  // Scroll helper
  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative bg-transparent"
    >
      <div className="max-w-7xl">
        {/* Terminal line */}
        <div className="mb-8 font-mono text-lime-400/70">
          <span className="animate-pulse">{">"}</span>{" "}
          initializing_system...
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono">
          <span className="text-white">HELLO, I'M</span>
          <br />
          <span
            className="text-lime-400 glitch-text"
            data-text="BUN PANIN"
          >
            BUN PANIN
          </span>
        </h1>

        {/* Typing line */}
        <div className="mb-8 overflow-hidden">
          <div className="text-2xl md:text-4xl font-mono text-white/90 h-12 flex items-center">
            <span className="text-lime-400 mr-3">$</span>
            <span>{glitchText}</span>
            <span className="animate-pulse ml-1">_</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl font-mono leading-relaxed">
          Building robust, scalable backend systems with Java, Laravel,
          and cloud technologies. Specializing in microservices
          architecture and DevOps automation.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 font-mono">
          <button
            onClick={() => scrollToSection("work")}
            className="px-8 py-3 bg-lime-400 text-black font-bold hover:bg-white transition-all duration-300 hover:scale-105 relative group overflow-hidden"
          >
            <span className="relative z-10">VIEW_PROJECTS</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-lime-400 text-lime-400 font-bold hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            CONTACT_ME
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
          {[
            { label: "EXPERIENCE", value: "1+ YEARS" },
            { label: "PROJECTS", value: "15+ DEPLOYED" },
            { label: "TECH_STACK", value: "12+ TOOLS" },
            { label: "STATUS", value: "AVAILABLE" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-lime-400/30 p-4 bg-lime-400/5"
            >
              <div className="text-lime-400/70 text-xs mb-1">
                {stat.label}
              </div>
              <div className="text-white font-bold">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
