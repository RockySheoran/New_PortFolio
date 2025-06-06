"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cpu, GitFork, LayoutPanelTop, Server, Languages, Settings, Box, Network } from "lucide-react";
import { SiExpress, SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiDocker, SiWebcomponentsdotorg, SiMysql } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { useState, useEffect } from "react";

const skills = [
  // Frontend
  { name: "Next.js", icon: <SiNextdotjs className="h-6 w-6 text-gray-900 dark:text-gray-100" />, category: "frontend" },
  { name: "React", icon: <FaReact className="h-6 w-6 text-[#61DAFB]" />, category: "frontend" },
  { name: "Redux", icon: <SiRedux className="h-6 w-6 text-[#764ABC]" />, category: "frontend" },
  { name: "Zustand", icon: <Box className="h-6 w-6 text-amber-500" />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6 text-[#06B6D4]" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6 text-[#3178C6]" />, category: "language" },
  { name: "JavaScript", icon: <SiJavascript className="h-6 w-6 text-[#F7DF1E]" />, category: "language" },
  { name: "shadcn/ui", icon: <div className="h-6 w-6 bg-[#111111] dark:bg-[#EEEEEE] rounded-sm flex items-center justify-center text-white dark:text-black text-xs font-bold">UI</div>, category: "frontend" },
  // Backend
  { name: "Node.js", icon: <Cpu className="h-6 w-6 text-[#339933]" />, category: "backend" },
  { name: "Express", icon: <SiExpress className="h-6 w-6 text-gray-800 dark:text-gray-200" />, category: "backend" },
  { name: "REST API", icon: <Network className="h-6 w-6 text-blue-400" />, category: "backend" },
  { name: "WebSocket", icon: <SiWebcomponentsdotorg className="h-6 w-6 text-indigo-400" />, category: "backend" },
  // Databases
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-[#47A248]" />, category: "database" },
  { name: "SQL", icon: <SiMysql className="h-6 w-6 text-[#4479A1]" />, category: "database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-6 w-6 text-[#336791]" />, category: "database" },
  { name: "Redis", icon: <SiRedis className="h-6 w-6 text-[#DC382D]" />, category: "database" },
  // Languages
  { name: "Java", icon: <FaJava className="h-6 w-6 text-[#007396]" />, category: "language" },
  // Tools
  { name: "Git", icon: <GitFork className="h-6 w-6 text-[#F05032]" />, category: "tool" },
  { name: "Docker", icon: <SiDocker className="h-6 w-6 text-[#2496ED]" />, category: "tool" },
  { name: "Prisma", icon: <SiPrisma className="h-6 w-6 text-[#2D3748] dark:text-[#ffffff]" />, category: "tool" },
];

const categories = [
  { id: "frontend", name: "Frontend", icon: <LayoutPanelTop className="h-5 w-5" /> },
  { id: "backend", name: "Backend", icon: <Server className="h-5 w-5" /> },
  { id: "database", name: "Database", icon: <Database className="h-5 w-5" /> },
  { id: "language", name: "Languages", icon: <Languages className="h-5 w-5" /> },
  { id: "tool", name: "Tools", icon: <Settings className="h-5 w-5" /> },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMobile, setIsMobile] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setShowAllSkills(false);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const displayedSkills = isMobile && !showAllSkills ? filteredSkills.slice(0, 9) : filteredSkills;

  return (
    <section id="skills" className="w-full py-16 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Technologies I've mastered and tools I use to build amazing digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setActiveCategory("all");
              setShowAllSkills(false);
            }}
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 border ${
              activeCategory === "all" 
                ? "bg-primary/10 border-primary text-primary shadow-lg shadow-primary/20" 
                : "bg-muted hover:bg-muted/80 text-muted-foreground border-transparent"
            }`}
          >
            <span>All</span>
            <span className="text-xs bg-background px-2 py-1 rounded-full">
              {skills.length}
            </span>
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setShowAllSkills(false);
              }}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all border ${
                activeCategory === category.id 
                  ? "bg-primary/10 border-primary text-primary shadow-lg shadow-primary/20" 
                  : "bg-muted hover:bg-muted/80 text-muted-foreground border-transparent"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              <span className="text-xs bg-background px-2 py-1 rounded-full">
                {skills.filter(s => s.category === category.id).length}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
                layout
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                className="flex flex-col items-center p-5 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors cursor-default border border-border/50 hover:border-primary/30 relative group overflow-hidden"
                title={skill.name}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div 
                  className="p-3 rounded-lg bg-background mb-3 shadow-sm group-hover:shadow-md transition-all"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  {skill.icon}
                </motion.div>
                <motion.span 
                  className="text-sm font-medium text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {skill.name}
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button for Mobile */}
        {isMobile && filteredSkills.length > 9 && (
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllSkills(!showAllSkills)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              {showAllSkills ? (
                <>
                  <span>Show Less</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                </>
              ) : (
                <>
                  <span>Show More ({filteredSkills.length - 9}+)</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}




// "use client";

// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Code, Database, Cpu, Palette, GitFork, Container, LayoutPanelTop, Server, Languages, Settings, Terminal, Box } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { SiExpress, SiRedux } from "react-icons/si";
// import { FaReact } from "react-icons/fa";
// import { GiAbstract053 } from "react-icons/gi";

// const skills = [
//   // Frontend
//   { name: "Next.js", level: 85, icon: <Code className="h-4 w-4" />, category: "frontend" },
//   { name: "React", level: 80, icon: <FaReact className="h-4 w-4" />, category: "frontend" },
//   { name: "Redux", level: 75, icon: <SiRedux className="h-4 w-4" />, category: "frontend" },
//   { name: "Zustand", level: 70, icon: <Box className="h-4 w-4" />, category: "frontend" },
//   { name: "Tailwind CSS", level: 85, icon: <Palette className="h-4 w-4" />, category: "frontend" },
//   { name: "shadcn/ui", level: 80, icon: <Palette className="h-4 w-4" />, category: "frontend" },
  
//   // Backend
//   { name: "Node.js", level: 75, icon: <Cpu className="h-4 w-4" />, category: "backend" },
//   { name: "Express.js", level: 70, icon: <SiExpress className="h-4 w-4" />, category: "backend" },
//   { name: "RESTful APIs", level: 80, icon: <Cpu className="h-4 w-4" />, category: "backend" },
//   { name: "WebSockets", level: 70, icon: <Cpu className="h-4 w-4" />, category: "backend" },
  
//   // Databases
//   { name: "MongoDB", level: 75, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "PostgreSQL", level: 70, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "SQL", level: 75, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "Redis", level: 65, icon: <Database className="h-4 w-4" />, category: "database" },
  
//   // Languages
//   { name: "TypeScript", level: 80, icon: <Code className="h-4 w-4" />, category: "language" },
//   { name: "JavaScript", level: 85, icon: <Code className="h-4 w-4" />, category: "language" },
//   { name: "Java (DSA)", level: 70, icon: <Code className="h-4 w-4" />, category: "language" },
  
//   // Tools
//   { name: "Git/GitHub", level: 80, icon: <GitFork className="h-4 w-4" />, category: "tool" },
//   { name: "Docker", level: 60, icon: <Container className="h-4 w-4" />, category: "tool" },
//   { name: "Prisma", level: 70, icon: <Database className="h-4 w-4" />, category: "tool" },
//   { name: "CLI Tools", level: 75, icon: <Terminal className="h-4 w-4" />, category: "tool" },
// ];

// const categoryIcons = {
//   frontend: <LayoutPanelTop className="h-5 w-5" />,
//   backend: <Server className="h-5 w-5" />,
//   database: <Database className="h-5 w-5" />,
//   language: <Languages className="h-5 w-5" />,
//   tool: <Settings className="h-5 w-5" />,
//   state: <GiAbstract053 className="h-5 w-5" />
// };

// const categoryColors = {
//   frontend: "from-blue-500 to-cyan-400",
//   backend: "from-purple-500 to-indigo-400",
//   database: "from-emerald-500 to-teal-400",
//   language: "from-amber-500 to-yellow-400",
//   tool: "from-rose-500 to-pink-400",
//   state: "from-violet-500 to-fuchsia-400"
// };

// const categoryDescriptions = {
//   frontend: "Building beautiful, responsive user interfaces",
//   backend: "Creating robust server-side applications",
//   database: "Designing and optimizing data storage",
//   language: "Core programming languages I work with",
//   tool: "Development tools and utilities",
//   state: "State management solutions"
// };

// const ProgressBar = ({ level, category }: { level: number; category: string }) => {
//   const [width, setWidth] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       setWidth(level);
//     }
//   }, [isInView, level]);

//   return (
//     <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
//       <motion.div
//         ref={ref}
//         initial={{ width: 0 }}
//         animate={{ width: `${width}%` }}
//         transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
//         className={`h-2 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`}
//       />
//     </div>
//   );
// };

// export default function SkillsSection() {
//   const [activeCategory, setActiveCategory] = useState<string>("all");
  
//   // Group skills by category for better organization
//   const categorizedSkills = {
//     frontend: skills.filter(skill => skill.category === "frontend"),
//     backend: skills.filter(skill => skill.category === "backend"),
//     database: skills.filter(skill => skill.category === "database"),
//     language: skills.filter(skill => skill.category === "language"),
//     tool: skills.filter(skill => skill.category === "tool"),
//     state: skills.filter(skill => skill.name === "Redux" || skill.name === "Zustand")
//   };

//   const filteredSkills = activeCategory === "all" 
//     ? skills 
//     : activeCategory === "state"
//       ? categorizedSkills.state
//       : skills.filter(skill => skill.category === activeCategory);

//   return (
//     <section id="skills" className="w-full py-12 md:py-16 bg-gradient-to-b from-muted/10 to-background">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
//             My <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Technical Skills</span>
//           </h2>
//           <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
//             Technologies I've mastered through hands-on projects and continuous learning
//           </p>
//         </motion.div>

//         {/* Category Filter - Mobile Only */}
//         <motion.div 
//           className="mb-6 flex overflow-x-auto pb-2 md:hidden gap-2 px-1 scrollbar-hide"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           {["all", "frontend", "state", "backend", "database", "language", "tool"].map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "default" : "outline"}
//               size="sm"
//               className={`rounded-full capitalize text-xs px-3 whitespace-nowrap transition-all ${
//                 activeCategory === category ? "shadow-md" : ""
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category === "all" ? "All" : category}
//             </Button>
//           ))}
//         </motion.div>

//         {/* Desktop Grid - Compact layout */}
//         <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-4">
//           {Object.entries(categorizedSkills).map(([category, skills]) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900/80 p-4 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <div className={`p-2 rounded-lg ${categoryColors[category as keyof typeof categoryColors]} bg-opacity-10`}>
//                   {categoryIcons[category as keyof typeof categoryIcons]}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg capitalize bg-gradient-to-r bg-clip-text text-transparent" style={{
//                     backgroundImage: `linear-gradient(to right, ${categoryColors[category as keyof typeof categoryColors].split(' ')[0].replace('from-', '')?.replace('-500', '-600')}, ${categoryColors[category as keyof typeof categoryColors].split(' ')[2]?.replace('to-', '')?.replace('-400', '-500')}`
//                   }}>
//                     {category === "state" ? "State Management" : category}
//                   </h3>
//                   <p className="text-xs text-muted-foreground">
//                     {categoryDescriptions[category as keyof typeof categoryDescriptions]}
//                   </p>
//                 </div>
//               </div>
//               <div className="space-y-3">
//                 {skills.map((skill) => (
//                   <motion.div 
//                     key={skill.name}
//                     whileHover={{ scale: 1.01 }}
//                     className="space-y-2 p-3 rounded-md bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <div className={`p-1.5 rounded-md ${categoryColors[skill.category as keyof typeof categoryColors]} bg-opacity-10`}>
//                           {skill.icon}
//                         </div>
//                         <span className="text-sm font-medium">{skill.name}</span>
//                       </div>
//                       <span className="text-xs font-medium" style={{
//                         color: `var(--${categoryColors[skill.category as keyof typeof categoryColors].split(' ')[0].replace('from-', '').replace('-500', '-600')})`
//                       }}>
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <ProgressBar level={skill.level} category={skill.category} />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Grid */}
//         <div className="md:hidden">
//           <div className="grid grid-cols-2 gap-3">
//             {filteredSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//                 className="bg-white dark:bg-gray-900/80 p-3 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs"
//               >
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className={`p-1.5 rounded-md ${categoryColors[skill.category as keyof typeof categoryColors]} bg-opacity-10`}>
//                     {skill.icon}
//                   </div>
//                   <span className="text-xs font-medium">{skill.name}</span>
//                 </div>
//                 <ProgressBar level={skill.level} category={skill.category} />
//                 <div className="flex justify-end mt-1">
//                   <span className="text-xs font-medium" style={{
//                     color: `var(--${categoryColors[skill.category as keyof typeof categoryColors].split(' ')[0].replace('from-', '').replace('-500', '-600')})`
//                   }}>
//                     {skill.level}%
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









































































// "use client";

// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Code, Database, Cpu, Palette, GitFork } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const skills = [
//   { name: "Next.js", level: 85, icon: <Code className="h-4 w-4" />, category: "frontend" },
//   { name: "React", level: 80, icon: <Code className="h-4 w-4" />, category: "frontend" },
//   { name: "Node.js", level: 75, icon: <Cpu className="h-4 w-4" />, category: "backend" },
//   { name: "TypeScript", level: 80, icon: <Code className="h-4 w-4" />, category: "language" },
//   { name: "JavaScript", level: 85, icon: <Code className="h-4 w-4" />, category: "language" },
//   { name: "Java", level: 70, icon: <Code className="h-4 w-4" />, category: "language" },
//   { name: "MongoDB", level: 75, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "PostgreSQL", level: 70, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "Redis", level: 65, icon: <Database className="h-4 w-4" />, category: "database" },
//   { name: "Tailwind CSS", level: 85, icon: <Palette className="h-4 w-4" />, category: "frontend" },
//   { name: "shadcn/ui", level: 80, icon: <Palette className="h-4 w-4" />, category: "frontend" },
//   { name: "Git/GitHub", level: 80, icon: <GitFork className="h-4 w-4" />, category: "tool" },
// //   { name: "Docker", level: 60, icon: <Tools className="h-4 w-4" />, category: "tool" },
//   { name: "Prisma", level: 70, icon: <Database className="h-4 w-4" />, category: "tool" },
//   { name: "RESTful APIs", level: 80, icon: <Cpu className="h-4 w-4" />, category: "backend" },
//   { name: "WebSockets", level: 70, icon: <Cpu className="h-4 w-4" />, category: "backend" },
// ];

// const categoryColors = {
//   frontend: "from-blue-500 to-cyan-400",
//   backend: "from-purple-500 to-indigo-400",
//   database: "from-emerald-500 to-teal-400",
//   language: "from-amber-500 to-yellow-400",
//   tool: "from-rose-500 to-pink-400"
// };

// const ProgressBar = ({ level, category }: { level: number; category: string }) => {
//   const [width, setWidth] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (isInView) {
//       setWidth(level);
//     }
//   }, [isInView, level]);

//   return (
//     <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
//       <motion.div
//         ref={ref}
//         initial={{ width: 0 }}
//         animate={{ width: `${width}%` }}
//         transition={{ duration: 1.5, delay: 0.2, type: "spring" }}
//         className={`h-1.5 rounded-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors]}`}
//       />
//     </div>
//   );
// };

// export default function SkillsSection() {
//   const [activeCategory, setActiveCategory] = useState<string>("all");
  
//   const filteredSkills = activeCategory === "all" 
//     ? skills 
//     : skills.filter(skill => skill.category === activeCategory);

//   return (
//     <section id="skills" className="w-full py-12 md:py-16 bg-gradient-to-b from-muted/30 to-background">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
//             My <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
//             Technologies I've mastered through projects and continuous learning
//           </p>
//         </motion.div>

//         {/* Category Filter - Mobile Only */}
//         <motion.div 
//           className="mb-6 flex overflow-x-auto pb-2 md:hidden gap-2 px-1"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//         >
//           {["all", "frontend", "backend", "database", "language", "tool"].map((category) => (
//             <Button
//               key={category}
//               variant={activeCategory === category ? "default" : "outline"}
//               size="sm"
//               className={`rounded-full capitalize text-xs px-3 ${
//                 activeCategory === category ? "shadow-sm" : ""
//               }`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </Button>
//           ))}
//         </motion.div>

//         {/* Desktop Grid */}
//         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {Object.entries(categoryColors).map(([category, colors]) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//               viewport={{ once: true }}
//               className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border border-gray-200 dark:border-gray-800"
//             >
//               <h3 className="font-medium text-sm mb-3 capitalize flex items-center gap-2">
//                 <span className={`bg-gradient-to-r ${colors} bg-clip-text text-transparent`}>
//                   {category}
//                 </span>
//               </h3>
//               <div className="space-y-4">
//                 {skills
//                   .filter(skill => skill.category === category)
//                   .map((skill) => (
//                     <div key={skill.name} className="space-y-1">
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-medium">{skill.name}</span>
//                         <span className="text-xs text-muted-foreground">{skill.level}%</span>
//                       </div>
//                       <ProgressBar level={skill.level} category={category} />
//                     </div>
//                   ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden">
//           <div className="grid grid-cols-2 gap-3">
//             {filteredSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 viewport={{ once: true, margin: "0px 0px -50px 0px" }}
//                 className="bg-white dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-800"
//               >
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className={`p-1.5 rounded-md ${categoryColors[skill.category as keyof typeof categoryColors]} bg-opacity-10`}>
//                     {skill.icon}
//                   </div>
//                   <span className="text-xs font-medium">{skill.name}</span>
//                 </div>
//                 <ProgressBar level={skill.level} category={skill.category} />
//                 <div className="text-right mt-1">
//                   <span className="text-xs text-muted-foreground">{skill.level}%</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
//             Always expanding my expertise through hands-on projects and continuous learning.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }