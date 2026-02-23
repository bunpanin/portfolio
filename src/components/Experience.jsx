import React from "react";

const experiences = [
  {
    title: "Backend Development Internship Preparation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed.Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quia blanditiis iste velit officiis sequi culpa. Voluptas cum, ipsam enim assumenda culpa possimus pariatur perspiciatis reiciendis rem consectetur error sed."
  },
  {
    title: "Self-Learning Projects",
    description:
      "Developed multiple full-stack applications including income trackers, leave management systems, and e-commerce solutions. Gained hands-on experience with database design, API development, and mobile app development.",
  },
  {
    title: "Bachelor’s Degree ( 2023 - Present )",
    description: "Currently in the final year of my Bachelor’s Degree in Information Technology at NTTI (National Technical Training Institute), focusing on my thesis project."
  },
  {
    title: "High School ( 2021 - 2023 )",
    description: "Completed upper secondary education (Grade 12) at Sok An Tonlab High School. During this period, I strengthened my knowledge in core subjects such as mathematics,"
  },
  {
    title: "Secondary School ( 2019 - 2021 )",
    description: "Completed lower secondary education (Grade 9) at Sok An Tonlab Secondary School, where I built a strong academic foundation in mathematics."
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-gray-300 py-20 px-6 font-mono">
      <div className="max-w-6xl mx-auto">
        
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
              {/* Circle Dot */}
              <span className="absolute -left-8 top-11 w-4 h-4 bg-lime-400 rounded-full border-4 border-black"></span>
              <h3 className="text-xl font-semibold text-lime-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;