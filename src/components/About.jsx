export default function About() {
  const techStack = {
    backend: [
      "Laravel",
      "Java Spring Boot",
      "Microservices ( Lerning )",
      "JWT Authentication",
      "OPT with Mail"
    ],
    frontend: [
      "Flutter",
      "Reactjs",
      "Html",
      "Tailwind css",
      "Bootstrap"
    ],
    database: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Radis ( Lerning )"
    ],
    devops_cloud: [
      "Docker",
      "Kubernetes",
      "Asible",
      "Nexus",
      "Nginx",
      "Google Cloud Platform",
      "CI/CD Pipelines",
      "Linux ( Ubuntu )",
    ],
  };

  return (
    <section id="about" className="min-h-screen px-6 py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 font-mono">
          <span className="text-lime-400/70">{">"} cat about.txt</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-lime-400">ME</span>
          </h2>
        </div>

        {/* Info + Bio */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* System Info */}
          <div className="border border-lime-400/30 p-8 bg-lime-400/5">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              SYSTEM_INFO
            </h3>

            <div className="space-y-3 font-mono text-sm">
              <div>
                <span className="text-lime-400">{">"} name:</span>
                <span className="text-white ml-2">Bun Panin</span>
              </div>

              <div>
                <span className="text-lime-400">{">"} role:</span>
                <span className="text-white ml-2">Backend Developer</span>
              </div>

              <div>
                <span className="text-lime-400">{">"} education:</span>
                <span className="text-white ml-2">
                  Year 4 – Bachelor's Degree in IT
                </span>
              </div>

              <div>
                <span className="text-lime-400">{">"} institution:</span>
                <span className="text-white ml-2">
                  National Technical Training Institute (NTTI)
                </span>
              </div>

              <div>
                <span className="text-lime-400">{">"} status:</span>
                <span className="text-white ml-2 animate-pulse">
                  AVAILABLE_FOR_HIRE
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="border border-lime-400/30 p-8 bg-lime-400/5">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              BIO_DATA
            </h3>

            <p className="text-white/80 leading-relaxed mb-4">
              I'm an Information Technology student at the National Technical
              Training Institute (NTTI), currently in Year 4, pursuing my
              Bachelor's Degree in Information Technology.
            </p>

            <p className="text-white/80 leading-relaxed">
              With over a year of hands-on experience in backend development, I
              specialize in building scalable microservices, optimizing API
              performance, and implementing robust DevOps pipelines. My
              expertise spans across Java Spring Boot, Laravel PHP, cloud
              infrastructure on GCP, and containerization with Docker and
              Kubernetes.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="border border-lime-400/30 p-8 bg-lime-400/5">
          <h3 className="text-2xl font-bold text-white mb-6 font-mono">
            TECH_STACK.json
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category}>
                <div className="text-lime-400 font-mono mb-3 uppercase text-sm">
                  {category.replace("_", " ")}:
                </div>

                <div className="space-y-2">
                  {techs.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <span className="text-lime-400">■</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
