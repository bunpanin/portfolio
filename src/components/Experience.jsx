import React from "react";

// const experiences = [
//   {
//     title: "Backend Development Internship Preparation",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed."
//   },
//   {
//     title: "Information Technology Officer at CRED (May 2025 - Present)",
//     description:
//      "my main responsible is deveop app"
//   },
//   {
//     title: "Bachelor’s Degree (2023-Present)",
//     description: "Currently in the final year of my Bachelor’s Degree in Information Technology at NTTI (National Technical Training Institute), focusing on my thesis project."
//   },
//   {
//     title: "High School (2021-2023)",
//     description: "Completed upper secondary education (Grade 12) at Sok An Tonlab High School. During this period, I strengthened my knowledge in core subjects such as mathematics,"
//   },
//   {
//     title: "Secondary School (2019-2021)",
//     description: "Completed lower secondary education (Grade 9) at Sok An Tonlab Secondary School, where I built a strong academic foundation in mathematics."
//   },
// ];

const experiences = [
  // {
  //   title: "DevOps Engineering (Sep 2025 - Present)",
  //   intro:
  //   "Currently learning DevOps as part of my career journey, focusing on CI/CD, containerization, and cloud infrastructure while building hands-on projects to support the completion of my Bachelor's Degree thesis.",
  //   responsibilities: [
  //     "shellscrip",
  //     "Docker and have porttainer for view",
  //     "Nginx reverst proxy",
  //     "Jenkins and sonaqube for scan porject",
  //     "Registry have Github Registry , Gitlab Registry , Dockerhub , Nexus Registry",
  //     "Ansible cac and iac and prepare infrastruture for kubernets cluster ",
  //     "Kubernetes cluster kubespray kubernetes dashboard",
  //     "Github Action with Helm chart and Argocd",
  //     "Monitoring application performance and logs using Prometheus and Grafana.",
  //   ],
  // },
  {
    title: "DevOps Engineering (Nov 2025 - Present)",
    intro:
      "Currently learning and practicing DevOps as part of my career development, focusing on CI/CD automation, containerization, cloud infrastructure, and supporting my Bachelor's Degree thesis through hands-on projects.",
    responsibilities: [
      "Writing Bash scripts to automate system tasks and deployments.",
      "Containerizing applications using Docker and managing containers with Portainer.",
      "Configuring Nginx as a reverse proxy for application routing.",
      "Implementing CI/CD pipelines using Jenkins and performing code quality analysis with SonarQube.",
      "Managing container images using GitHub Container Registry, GitLab Registry, Docker Hub, and Nexus Repository.",
      "Using Ansible for configuration management (CAC) and Infrastructure as Code (IaC), preparing infrastructure for Kubernetes clusters.",
      "Deploying and managing Kubernetes clusters using Kubespray and Kubernetes Dashboard.",
      "Implementing GitHub Actions workflows with Helm charts and Argo CD for GitOps-based deployments.",
      "Monitoring application performance and logs using Prometheus and Grafana."
    ],
  },
  {
    title: "Spring Boot Framework (Sep 2025 - Present)",
    intro:
    "Currently self-studying Spring Boot with a strong focus on backend development. Actively building practical projects to strengthen my technical expertise and to support the completion of my Bachelor's Degree thesis.",
    responsibilities: [
      "Developing REST APIs using Spring Boot following MVC architecture.",
      "Implementing CRUD operations with Spring Data JPA and PostgreSQL.",
      "Designing relational database schemas and managing entity relationships.",
      "Implementing authentication and authorization using Spring Security and JWT.",
      "Testing and debugging APIs using Postman and Swagger UI.",
      "Applying clean code principles and layered architecture (Web, Service, Repository, DTOs, Domain).",
      "Containerizing applications using Docker for consistent development and deployment environments.",
      "Deploying backend applications to cloud platforms (GCP).",
      "Configuring Nginx as a reverse proxy and setting up SSL certificates using Certbot for secure HTTPS connections."
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