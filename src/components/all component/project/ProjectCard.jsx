"use client";

import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight, Code, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";


// type projects = {
//   title: string;
//   description: string;
//   tags: string[];
//   github: string;
//   live: string;
//   image?: string;
//   featured?: boolean;

// };

const ProjectCard = ({ project, index }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const background = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, var(--accent) 0%, transparent 80%)`;

  // Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div 
      className="h-full w-full group"
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={true}
        glareMaxOpacity={0.1}
        glareColor={currentTheme === "dark" ? "#fff" : "#000"}
        glarePosition="all"
        glareBorderRadius="12px"
        transitionSpeed={1000}
        className="h-full"
        scale={1.02}
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -8 }}
          className="h-full relative overflow-hidden"
        >
          <Card className="h-full flex flex-col border-border/50 bg-background/70 dark:bg-background/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-accent/50">
            {/* Dynamic Gradient Highlight */}
            <motion.div
              style={{ background }}
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
            />

            {/* Header with Image */}
            <CardHeader className="relative h-48 p-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90 z-10" />
              
              {project.image ? (
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  initial="initial"
                  whileHover="hover"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              ) : (
                <Skeleton className="w-full h-full" />
              )}
              
              <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                <CardTitle className="text-2xl font-bold text-white">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <Badge variant="secondary" className="mt-2 w-fit">
                    Featured
                  </Badge>
                )}
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-6 flex-1 flex flex-col">
              <CardDescription className="mb-6 text-foreground/80 flex-grow">
                {project.description}
              </CardDescription>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <AnimatePresence>
                  {project.tags.map((tag, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Badge 
                        variant="outline"
                        className="backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all cursor-default"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </CardContent>

            {/* Footer with Buttons */}
            <CardFooter className="p-6 pt-0">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2 group/code" 
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Code className="h-4 w-4 group-hover/code:rotate-45 transition-transform" />
                    <span>Code</span>
                  </a>
                </Button>
                
                <Button 
                  variant="default" 
                  className="flex-1 gap-2 group/demo"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4 group-hover/demo:rotate-45 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;