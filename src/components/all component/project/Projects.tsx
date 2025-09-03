"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import {projects} from "./Project_Data"; // Adjust the import path as necessary
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMd } from "./useMediaQuery";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const isMd = useIsMd();
  
  // Determine how many projects to show initially
  const initialProjectCount = isMd ? 7 : 4;
  const displayedProjects = showAll ? projects : projects.slice(0, initialProjectCount);
  const hasMoreProjects = projects.length > initialProjectCount;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVariants}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Here are some of my selected works. Each project represents a unique challenge and solution.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard 
              key={project?.id} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>

        {/* See More / Show Less Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="rounded-xl text-md font-semibold shadow-md hover:shadow-lg px-8 py-3 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  See More Projects
                  <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="rounded-xl text-md sm:text-lg font-semibold shadow-lg hover:shadow-xl px-8 py-6"
          >
            <a href="#contact" className="text-sm">
              Let's Build Something Together
              <ArrowUpRight className="ml-3 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;