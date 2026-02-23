// export default function About() {
//   const techStack = {
//     backend: [
//       "Laravel",
//       "Java Spring Boot",
//       "Microservices ( Lerning )",
//       "JWT Authentication",
//       "OPT with Mail"
//     ],
//     frontend: [
//       "Flutter",
//       "Reactjs",
//       "Html",
//       "Tailwind css",
//       "Bootstrap"
//     ],
//     database: [
//       "MySQL",
//       "PostgreSQL",
//       "SQL Server",
//       "Radis ( Lerning )"
//     ],
//     devops_cloud: [
//       "Docker",
//       "Kubernetes",
//       "Asible",
//       "Nexus",
//       "Nginx",
//       "Google Cloud Platform",
//       "CI/CD Pipelines",
//       "Linux ( Ubuntu )",
//     ],
//   };

//   return (
//     <section id="about" className="min-h-screen px-6 py-20 relative bg-transparent">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-12 font-mono">
//           <span className="text-lime-400/70">{">"} cat about.txt</span>
//           <h2 className="text-4xl md:text-6xl font-bold mt-4">
//             <span className="text-white">ABOUT</span>{" "}
//             <span className="text-lime-400">ME</span>
//           </h2>
//         </div>

//         {/* Info + Bio */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {/* System Info */}
//           <div className="border border-lime-400/30 p-8 bg-lime-400/5">
//             <h3 className="text-2xl font-bold text-white mb-4 font-mono">
//               SYSTEM_INFO
//             </h3>

//             <div className="space-y-3 font-mono text-sm">
//               <div>
//                 <span className="text-lime-400">{">"} name:</span>
//                 <span className="text-white ml-2">Bun Panin</span>
//               </div>

//               <div>
//                 <span className="text-lime-400">{">"} role:</span>
//                 <span className="text-white ml-2">Backend Developer</span>
//               </div>

//               <div>
//                 <span className="text-lime-400">{">"} education:</span>
//                 <span className="text-white ml-2">
//                   Year 4 – Bachelor's Degree in IT
//                 </span>
//               </div>

//               <div>
//                 <span className="text-lime-400">{">"} institution:</span>
//                 <span className="text-white ml-2">
//                   National Technical Training Institute (NTTI)
//                 </span>
//               </div>

//               <div>
//                 <span className="text-lime-400">{">"} status:</span>
//                 <span className="text-white ml-2 animate-pulse">
//                   AVAILABLE_FOR_HIRE
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="border border-lime-400/30 p-8 bg-lime-400/5">
//             <h3 className="text-2xl font-bold text-white mb-4 font-mono">
//               BIO_DATA
//             </h3>

//             <p className="text-white/80 leading-relaxed mb-4">
//               I'm an Information Technology student at the National Technical
//               Training Institute (NTTI), currently in Year 4, pursuing my
//               Bachelor's Degree in Information Technology.
//             </p>

//             <p className="text-white/80 leading-relaxed">
//               With over a year of hands-on experience in backend development, I
//               specialize in building scalable microservices, optimizing API
//               performance, and implementing robust DevOps pipelines. My
//               expertise spans across Java Spring Boot, Laravel PHP, cloud
//               infrastructure on GCP, and containerization with Docker and
//               Kubernetes.
//             </p>
//           </div>
//         </div>

//         {/* Tech Stack */}
//         <div className="border border-lime-400/30 p-8 bg-lime-400/5">
//           <h3 className="text-2xl font-bold text-white mb-6 font-mono">
//             TECH_STACK.json
//           </h3>

//           <div className="grid md:grid-cols-4 gap-6">
//             {Object.entries(techStack).map(([category, techs]) => (
//               <div key={category}>
//                 <div className="text-lime-400 font-mono mb-3 uppercase text-sm">
//                   {category.replace("_", " ")}:
//                 </div>

//                 <div className="space-y-2">
//                   {techs.map((tech, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center gap-2 text-white/80 text-sm"
//                     >
//                       <span className="text-lime-400">■</span>
//                       <span>{tech}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import syp from "../assets/605954495_122206461992562324_5982430992121286706_n.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-black text-gray-300 py-20 px-6 font-mono"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 font-mono">
          <span className="text-lime-400/70">{">"} cat about.txt</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            <span className="text-white">ABOUT</span>{" "}
            <span className="text-lime-400">ME</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Image */}
          <div className="lg:w-1/3">
            <img
              src={ syp }
              alt="Profile"
              className="w-full border border-cyan-400 
                         shadow-[0_0_30px_rgba(34,211,238,0.3)] 
                         grayscale contrast-125"
            />
          </div>

          {/* Content */}
          <div className="lg:w-2/3 space-y-6">

            <h3 className="text-2xl text-white border-l-4 border-lime-400 pl-4">
              Software Engineer
            </h3>

            <p className="italic text-gray-400">
              A passionate programmer driven to make the world a better place through technology.
            </p>

            {/* Info Grid */}
            <div className="grid md:grid-cols-2 gap-8">

              <ul className="space-y-3">
                <li className="cyber-box">
                  <span className="text-lime-400/70">Birthday:</span> ** ** 2005
                </li>
                <li className="cyber-box">
                  <span className="text-lime-400/70">Phone:</span> +855 066 260 411
                </li>
                <li className="cyber-box">
                  <span className="text-lime-400/70">City:</span> Phnom Penh, Cambodia
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="cyber-box">
                  <span className="text-lime-400/70">Age:</span> 20
                </li>
                <li className="cyber-box">
                  <span className="text-lime-400/70">Degree:</span> Bachelor Degree
                </li>
                <li className="cyber-box">
                  <span className="text-lime-400/70">Email:</span> bunpanin017@gmail.com
                </li>
              </ul>

            </div>

            <p className="text-gray-400">
              Software Engineer with strong expertise in programming, system design, and application development. Skilled in problem-solving, collaboration, and delivering scalable, high-quality solutions.
            </p>

          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .cyber-box {
          border: 1px solid #1f2937;
          padding: 10px 15px;
          background: #0a0a0a;
          transition: all 0.3s ease;
        }

        .cyber-box:hover {
          border-color: #48A111;
          box-shadow: 0 0 15px rgb(148, 163, 120); 
        }
      `}</style>

    </section>
  );
};

export default About;