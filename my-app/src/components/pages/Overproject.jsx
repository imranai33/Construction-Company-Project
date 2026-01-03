import React from "react";
import { motion } from "framer-motion";
import projectimg from "../../assets/images/project2.png";

const projects = [
  { id: 1, title: "It Can’t Be Warmer" },
  { id: 2, title: "It Can’t Be Warmer" },
  { id: 3, title: "It Can’t Be Warmer" },
  { id: 4, title: "It Can’t Be Warmer" },
  { id: 5, title: "It Can’t Be Warmer" },
  { id: 6, title: "It Can’t Be Warmer" },
  { id: 7, title: "It Can’t Be Warmer" },
  { id: 8, title: "It Can’t Be Warmer" },
  { id: 9, title: "It Can’t Be Warmer" },
];

const Overproject = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-[#404040] h-[220px] flex items-center justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Our Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="bg-[#404040] py-12 px-6 md:px-16">
        <div className="flex flex-wrap gap-8 justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ x: index % 2 === 0 ? -150 : 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            >
              {/* Image */}
              <img
                src={projectimg}
                alt={project.title}
                className="w-full h-72 object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white uppercase font-bold text-center text-lg md:text-xl px-4 tracking-wide drop-shadow-lg">
                  {project.title}
                </p>
              </div>

              {/* Optional subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-white/30 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overproject;
