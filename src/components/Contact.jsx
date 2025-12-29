import { Mail, Terminal, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-6 py-20 relative bg-transparent"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 font-mono">
          <span className="text-lime-400/70">{">"} ./contact.sh</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            <span className="text-white">GET IN</span>{" "}
            <span className="text-lime-400">TOUCH</span>
          </h2>
        </div>

        {/* Contact Info */}
        <div className="border border-lime-400/30 p-8 bg-lime-400/5 mb-8">
          <p className="text-white/80 text-lg mb-6">
            I'm currently available for freelance work and full-time
            opportunities. Let’s build something amazing together.
          </p>

          <div className="space-y-4 font-mono">
            <div className="flex items-center gap-3">
              <Mail className="text-lime-400" size={20} />
              <span className="text-white">
                bunpanin017@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Terminal className="text-lime-400" size={20} />
              <span className="text-white">
                Available for remote work
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:bunpanin017@gmail.com"
            className="flex-1 p-4 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300 text-center font-mono font-bold"
          >
            SEND_EMAIL
          </a>

          <a
            href="https://github.com/bunpanin"
            target="_blank"
            className="p-4 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            <Github size={24} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="p-4 border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* System Status */}
        <div className="border border-lime-400/30 p-6 bg-lime-400/5 font-mono text-sm">
          <div className="text-lime-400/70 mb-2">
            {">"} uptime --since
          </div>
          <div className="text-white">
            System operational since 2023
          </div>

          <div className="text-lime-400/70 mt-4">
            {">"} status
          </div>
          <div className="text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
            ONLINE — Ready to collaborate
          </div>
        </div>
      </div>
    </section>
  );
}
