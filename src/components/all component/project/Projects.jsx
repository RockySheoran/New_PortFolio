"use client";

import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "./Project_Data";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useTheme } from "next-themes";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const controls = useAnimation();
  const { theme } = useTheme();

  // Get all unique tags
  const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

  // Filter projects
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((project) => project.tags.includes(activeFilter));

  // Animation sequence
  useEffect(() => {
    controls.start("visible");
  }, [controls, activeFilter]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Here are some of my selected works. Each project represents a unique challenge and solution.
          </motion.p>
        </motion.div>

        {/* Filter Component */}
        {/* <ProjectFilter 
          tags={allTags} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          theme={theme}
        /> */}

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              theme={theme}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: theme === 'light' ? '#4338ca' : '#a5b4fc'
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Let's Build Something Together
            <svg 
              className="ml-3 -mr-1 h-5 w-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;