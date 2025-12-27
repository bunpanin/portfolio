import { ExternalLink, Server, Database, Cloud } from "lucide-react";

export default function Work() {
  const projects = [
    {
      title: "Job Posting Platform",
      description:
        "Backend system for job posting with role-based access, REST API, authentication, and admin dashboard.",
      tech: ["Laravel", "MySQL", "JWT", "REST API"],
      icon: Server,
      link: "#",
    },
    {
      title: "Weather Report Automation",
      description:
        "Automated weather monitoring system that generates reports, charts, and sends alerts via Telegram.",
      tech: ["SQL Server", "Python", "Telegram API", "Cron"],
      icon: Cloud,
      link: "#",
    },
    {
      title: "Mini Mart Management",
      description:
        "Inventory, sales, and reporting system for small marts with clean backend architecture.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      icon: Database,
      link: "#",
    },
    {
      title: "Mini Mart Management",
      description:
        "Inventory, sales, and reporting system for small marts with clean backend architecture.",
      tech: ["Java", "Spring Boot", "PostgreSQL"],
      icon: Database,
      link: "#",
    },
  ];

  return (
    <section id="work" className="min-h-screen px-6 py-20 relative bg-transparent   ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 font-mono">
          <span className="text-lime-400/70">{">"} cd /projects</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            <span className="text-white">FEATURED</span>{" "}
            <span className="text-lime-400">WORK</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-lime-400/30 bg-lime-400/5 hover:bg-lime-400/10 transition-all duration-300 p-6 relative overflow-hidden"
            >
              {/* Top animation line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-lime-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Icon */}
              <div className="mb-4 text-lime-400">
                <project.icon size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 font-mono">
                {project.title}
              </h3>

              <p className="text-white/70 mb-4 text-sm">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 border border-lime-400/50 text-xs text-lime-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 text-lime-400 hover:text-white transition-colors font-mono text-sm"
              >
                <span>VIEW_CODE</span>
                <ExternalLink
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
