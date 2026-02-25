import React from "react";

const experiences = [
  {
    title: "DevOps Engineering (Nov 2025 - Present)",
    intro:
      "Practicing DevOps with focus on CI/CD, containerization, cloud infrastructure, and thesis-related projects.",
    responsibilities: [
      "Automated tasks using Bash scripting.",
      "Containerized applications with Docker and managed via Portainer.",
      "Configured Nginx reverse proxy and SSL.",
      "Built CI/CD pipelines using Jenkins and SonarQube.",
      "Managed container registries (GHCR, Docker Hub, Nexus).",
      "Applied Ansible for IaC and Kubernetes infrastructure setup.",
      "Deployed Kubernetes clusters using Kubespray.",
      "Implemented GitHub Actions, Helm, and Argo CD (GitOps).",
      "Monitored systems using Prometheus and Grafana."
    ],
  },
  {
    title: "Spring Boot Framework (Sep 2025 - Present)",
    intro:
    "Self-studying Spring Boot to support the completion of my Bachelor's Degree thesis.",
    responsibilities: [
      "Developing REST APIs using Spring Boot following MVC architecture.",
      "Implementing CRUD operations with Spring Data JPA and PostgreSQL.",
      "Designing relational database schemas and managing entity relationships.",
      "Implementing authentication and authorization using Spring Security and JWT.",
      "Testing and debugging APIs using Postman and Swagger UI.",
      "Containerized applications with Docker, deployed backend services on GCP, and configured Nginx with SSL (Certbot) for secure production environments."
    ],
  },
  {
    title: "Information Technology Officer at CRED (May 2025 - Present)",
    intro:
      "As an Information Technology Officer, I am responsible for designing, developing, and maintaining internal applications to support business operations.",
    responsibilities: [
      "Developed and maintained mobile applications using Flutter.",
      "Designed application prototypes and UI/UX layouts using Figma before development.",
      "Modified and maintained RESTful APIs built with CodeIgniter and Laravel.",
      "Provided technical support to branch offices and assisted users with system-related issues.",
      "Monitored and maintained system performance to ensure smooth daily operations.",
    ],
  },
  {
    title: "Bachelor’s Degree (2023-Present)",
    intro: "Currently in the final year of my Bachelor’s Degree in Information Technology at NTTI (National Technical Training Institute), focusing on my thesis project.",
    description: []
  },
  {
    title: "High School (2021-2023)",
    intro: "Completed upper secondary education (Grade 12) at Sok An Tonlab High School. During this period, I strengthened my knowledge in core subjects such as mathematics,",
    description: []
  },
  {
    title: "Secondary School (2019-2021)",
    intro: "Completed lower secondary education (Grade 9) at Sok An Tonlab Secondary School, where I built a strong academic foundation in mathematics.",
    description: []
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-gray-300 py-20 px-6 font-mono">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">

          <p className="text-lime-400/70">{">"} more my_professional_growth.txt</p> 
           <h2 className="text-3xl md:text-4xl font-bold mt-4">
            <span className="text-white">Experience &</span>{" "}
            <span className="text-lime-400"> Learning Journey</span>
          </h2>

        </div>

        <div className="relative border-l-2 border-gray-700 ml-4">
          {experiences.map((item, index) => (
            <div key={index} className="ml-6 relative py-10">
              <span className="absolute -left-8.5 top-11 w-5 h-5 bg-lime-400 rounded-full border-4 border-black"></span>

              <h3 className="text-xl font-semibold text-lime-400 mb-4">
                {item.title}
              </h3>

              {/* Intro Paragraph */}
              {item.intro && (
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {item.intro}
                </p>
              )}

              {/* Bullet Points */}
              {item.responsibilities && (
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {item.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
       
        </div>
      </div>
    </section>
  );
};

export default Experience;