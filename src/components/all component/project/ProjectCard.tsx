"use client";

import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight, Code, Plus } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  
  // 3D cursor effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseXRotate = useTransform(mouseX, [0, 400], [-8, 8]);
  const mouseYRotate = useTransform(mouseY, [0, 400], [8, -8]);
  
  // Lighting effects
  const background = useMotionTemplate`radial-gradient(350px at ${mouseX}px ${mouseY}px, var(--accent) 0%, transparent 70%)`;
  const borderGlow = useMotionTemplate`0 0 0 1px rgba(var(--accent-rgb), 0.3), 0 0 30px 0 rgba(var(--accent-rgb), ${isHovered || isTapped ? 0.3 : 0.1})`;

  // Check if mobile on mount
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  // Handle mobile tap
  const handleTap = () => {
    if (isMobile) {
      setIsTapped(!isTapped);
    }
  };

  // Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  };

  const tagContainerVariants = {
    collapsed: { height: 36 },
    expanded: { height: "auto" },
    transition: { duration: 0.3, ease: "easeOut" }
  };

  return (
    <div 
      ref={cardRef}
      className="h-full w-full group"
      onMouseMove={(e) => {
        if (!isMobile) {
          const { left, top } = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }
      }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleTap}
    >
      <Tilt
        tiltMaxAngleX={isMobile ? (isTapped ? 10 : 0) : 4}
        tiltMaxAngleY={isMobile ? (isTapped ? 10 : 0) : 4}
        glareEnable={!isMobile || isTapped}
        glareMaxOpacity={0.2}
        glareColor={currentTheme === "dark" ? "#fff" : "#000"}
        glarePosition="all"
        glareBorderRadius="12px"
        transitionSpeed={1000}
        className="h-full"
        scale={isMobile ? 1 : 1.03}
        tiltEnable={!isMobile || isTapped}
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{
            rotateX: isMobile ? (isTapped ? mouseYRotate : 0) : mouseYRotate,
            rotateY: isMobile ? (isTapped ? mouseXRotate : 0) : mouseXRotate,
          }}
          className="h-full relative overflow-hidden transform-style-preserve-3d"
        >
          <Card className="h-full flex flex-col border-border/50 bg-background/80 dark:bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-accent/50">
            {/* 3D Lighting Effects */}
            <motion.div
              style={{ 
                background,
                boxShadow: borderGlow,
              }}
              className={`absolute inset-0 ${
                isMobile 
                  ? isTapped ? "opacity-100" : "opacity-0" 
                  : "opacity-0 group-hover:opacity-100"
              } transition-opacity duration-500 pointer-events-none z-0`}
            />
            
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
              <div className={`absolute inset-0 border ${
                isMobile && isTapped 
                  ? "border-accent/30" 
                  : "border-transparent group-hover:border-accent/20"
              } transition-all duration-300`} />
            </div>

            {/* Header with Image */}
            <CardHeader className="relative h-40 sm:h-48 p-0 overflow-hidden rounded-t-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90 z-10" />
              
              {project.image ? (
                <motion.div 
                  className="absolute inset-0 w-full h-full"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  variants={imageVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    placeholder={project.imageBlur ? "blur" : "empty"}
                    blurDataURL={project.imageBlur}
                  />
                </motion.div>
              ) : (
                <Skeleton className="w-full h-full" />
              )}
              
              <div className="relative z-20 p-4 flex flex-col h-full justify-end">
                <CardTitle className="text-lg sm:text-2xl font-bold text-white line-clamp-2 drop-shadow-lg">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-1 mt-1 sm:mt-2">
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs sm:text-sm backdrop-blur-sm">
                      Featured 
                    </Badge>
                  )}
                  {project.work && project.work !== "null" && 
                    <Badge variant="secondary" className="text-xs sm:text-sm backdrop-blur-sm">
                      {project.work} 
                    </Badge>
                  }
                </div>
              </div>
            </CardHeader>

            {/* Content */}
            <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
              {/* Description with smooth scrolling */}
              <motion.div
                className="relative mb-2 sm:mb-4"
                initial={{ height: 72 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <CardDescription className={cn(
                  "text-foreground/80 text-xs sm:text-base pr-1 sm:pr-2",
                  "overflow-y-auto custom-scrollbar",
                  "max-h-[72px] sm:max-h-[120px]"
                )}>
                  {project.description}
                </CardDescription>
                {/* Gradient fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background/90 to-transparent pointer-events-none" />
              </motion.div>
              
              {/* Tags with expand/collapse */}
              <div className="mb-2 sm:mb-4">
                <motion.div
                  variants={tagContainerVariants}
                  animate={showAllTags ? "expanded" : "collapsed"}
                  className="relative overflow-hidden"
                >
                  <div className="flex flex-wrap gap-1 sm:gap-2 py-1 pr-1 sm:pr-2">
                    <AnimatePresence>
                      {project.tags.map((tag: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: i * 0.03 }}
                        >
                          <Badge 
                            variant="outline"
                            className="text-xs sm:text-sm backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all cursor-default"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
                
                {project.tags.length > 3 && (
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowAllTags(!showAllTags);
                    }}
                    className="mt-1 sm:mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      animate={{ rotate: showAllTags ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus className="h-3 w-3" />
                    </motion.span>
                    {showAllTags ? "Show less" : `Show all (${project.tags.length})`}
                  </motion.button>
                )}
              </div>
            </CardContent>

            {/* Footer with Buttons */}
            <CardFooter className="p-4 sm:p-6 pt-0">
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-1 sm:gap-2 group/code h-9 sm:h-11 py-1 backdrop-blur-sm text-xs sm:text-sm" 
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View code for ${project.title}`}
                  >
                    <Code className="h-3 w-3 sm:h-4 sm:w-4 group-hover/code:rotate-45 transition-transform" />
                    <span className="truncate">View Code</span>
                    <span className="absolute inset-0 rounded-md bg-accent/0 group-hover/code:bg-accent/10 transition-colors duration-300" />
                  </a>
                </Button>
                
                <Button 
                  variant="default" 
                  className="flex-1 gap-1 sm:gap-2 group/demo h-9 sm:h-11 py-1 relative overflow-hidden text-xs sm:text-sm"
                  asChild
                  onClick={(e) => e.stopPropagation()}
                >
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/demo:rotate-45 transition-transform" />
                    <span className="truncate">Live Demo</span>
                    {/* Button shine effect */}
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/demo:opacity-100"
                      initial={{ x: -100 }}
                      whileHover={{ x: "100%", transition: { duration: 0.8, repeat: Infinity } }}
                    />
                  </a>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </Tilt>

      <style jsx global>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 3px;
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--accent));
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--accent)/0.8);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;