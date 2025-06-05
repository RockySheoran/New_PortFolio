"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, Palette, GitFork, Container, LayoutPanelTop, Server, Languages, Settings, Terminal, Box, Network } from "lucide-react";
import { SiExpress, SiRedux, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiMongodb, SiPostgresql, SiRedis, SiPrisma, SiDocker, SiWebcomponentsdotorg, SiMysql } from "react-icons/si";
import { FaReact, FaJava } from "react-icons/fa";
import { GiAbstract053 } from "react-icons/gi";
import { useState } from "react";

const skills = [
  // Frontend
  { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5 text-gray-900 dark:text-gray-100" />, category: "frontend" },
  { name: "React", icon: <FaReact className="h-5 w-5 text-blue-500" />, category: "frontend" },
  { name: "Redux", icon: <SiRedux className="h-5 w-5 text-purple-500" />, category: "frontend" },
  { name: "Zustand", icon: <Box className="h-5 w-5 text-amber-500" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-5 w-5 text-cyan-500" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript className="h-5 w-5 text-blue-600" />, category: "language" },
  { name: "JavaScript", icon: <SiJavascript className="h-5 w-5 text-yellow-400" />, category: "language" },
  { name: "shadcn/ui", icon: <div className="h-5 w-5 bg-[#111111] dark:bg-[#EEEEEE] rounded-sm flex items-center justify-center text-white dark:text-black text-xs font-bold">UI</div>, category: "frontend" },
  // Backend
  { name: "Node.js", icon: <Cpu className="h-5 w-5 text-green-500" />, category: "backend" },
  { name: "Express.js", icon: <SiExpress className="h-5 w-5 text-gray-800 dark:text-gray-200" />, category: "backend" },
  { name: "REST API", icon: <Network className="h-5 w-5 text-blue-400" />, category: "backend" },
  { name: "WebSocket", icon: <SiWebcomponentsdotorg className="h-5 w-5 text-indigo-400" />, category: "backend" },
  // Databases
  { name: "MongoDB", icon: <SiMongodb className="h-5 w-5 text-green-600" />, category: "database" },
   { name: "SQL", icon: <SiMysql className="h-5 w-5 text-blue-400" />, category: "database" },
  { name: "PostgreSQL", icon: <SiPostgresql className="h-5 w-5 text-blue-700" />, category: "database" },
  { name: "Redis", icon: <SiRedis className="h-5 w-5 text-red-600" />, category: "database" },
  
  // Languages
  { name: "Java (DSA)", icon: <FaJava className="h-5 w-5 text-red-500" />, category: "language" },
  
  // Tools
  { name: "Git", icon: <GitFork className="h-5 w-5 text-orange-500" />, category: "tool" },
  { name: "Docker", icon: <SiDocker className="h-5 w-5 text-blue-400" />, category: "tool" },
  { name: "Prisma", icon: <SiPrisma className="h-5 w-5 text-teal-500" />, category: "tool" },
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

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Technologies I work with regularly
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1 text-sm rounded-full transition-all ${
              activeCategory === "all" 
                ? "bg-primary text-black shadow-md" 
                : "bg-muted hover:bg-muted/80 text-muted-foreground"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1 text-sm rounded-full flex items-center gap-1 transition-all ${
                activeCategory === category.id 
                  ? "bg-primary text-black shadow-md" 
                  : "bg-muted hover:bg-muted/80 text-muted-foreground"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="flex flex-col items-center p-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              title={skill.name}
            >
              <div className="p-3 rounded-full bg-background mb-2">
                {skill.icon}
              </div>
              <span className="text-xs font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
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