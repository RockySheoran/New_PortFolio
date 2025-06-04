"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Twitter, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Mail, label: "Email", url: "#" }
  ];

  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              
              <div className="mt-4 h-16 sm:h-20 lg:h-24 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                <TypeAnimation
                  sequence={[
                    'Full Stack Developer',
                    1500,
                    'React Specialist',
                    1500,
                    'Next.js Expert',
                    1500,
                    'Cloud Architect',
                    1500
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
                />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Crafting pixel-perfect, high-performance web applications with modern stacks.
              Passionate about building intuitive user experiences with React, Next.js,
              TypeScript, and Node.js. Let's build something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="rounded-full px-8 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-2 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Download CV
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
                  className="rounded-full h-12 w-12 flex items-center justify-center shadow-sm hover:shadow-md bg-background hover:bg-accent/50 transition-all border"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                  <motion.span
                    className="absolute -bottom-8 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
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
              className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20"
            >
              <image
                src="https://drive.google.com/file/d/1HnXHz9wnndM5M2djZnhbw11qvx407CvP/view?usp=drive_link"
                alt="Developer Illustration"
               
                className="object-cover"
                
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}