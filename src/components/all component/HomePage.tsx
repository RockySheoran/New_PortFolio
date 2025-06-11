"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowRight,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLeetcode } from "react-icons/si";
// import Particles from "../Particles/Particles";

export default function HomePage() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/RockySheoran" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rocky-77a984267",
    },
    {
      icon: SiLeetcode,
      label: "LeetCode",
      url: "https://leetcode.com/u/rockysheoran72/",
    },
    { icon: Mail, label: "Email", url: "mailto:rockysheoran72@example.com" },
  ];
  const resume = "/image/Rocky.pdf";
  return (
    <div className="">
      {/* <div style={{ width: '100vw', height: '100vh', position: 'relative' }} className="inset-0 -z-10">
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
    className="absolute inset-0 w-full h-full"
  />
</div> */}

      <section
        id="home"
        className="min-h-screen w-full flex items-center py-12 md:py-24  "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{" "}
                  <span className="text-primary animate-pulse">
                    Rocky Sheoran
                  </span>
                </h1>

                <div className="mt-4 h-16 sm:h-20 lg:h-24 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      1500,
                      "Web Developer",
                      1500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                A passionate Fullstack Developer with creative thinking. Loves
                creating sleek designs and best softwares out of the box, I
                always wanna make products the best and most efficient.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a href="#projects">
                  <Button
                    size="lg"
                    className="rounded-full cursor-pointer px-8 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all group bg-gradient-to-r from-primary to-purple-600 text-white"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" />
                  </Button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(resume, "_blank");
                  }}
                  className="rounded-full px-8 cursor-pointer border-2 border-primary/50 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-primary" />
                    <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      Download CV
                    </span>
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center lg:justify-start gap-4 pt-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative rounded-full h-12 w-12 flex items-center justify-center shadow-sm hover:shadow-md bg-background hover:bg-accent/50 transition-all border border-muted"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-primary" />
                    <motion.span
                      className="absolute -bottom-8 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background px-2 py-1 rounded-full shadow-sm"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {social.label}
                    </motion.span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Image (Hidden on small screens) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block relative w-full h-[32rem]"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/30"
              >
                <Image
                  src="/my1.jpg"
                  alt="Rocky Sheoran - Full Stack Developer"
                  width={600}
                  height={800}
                  className="object-cover rounded-[2rem] shadow-2xl shadow-primary/20"
                  priority
                  quality={100}
                  // sizes="(max-width: 768px) 100vw, 50vw"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
