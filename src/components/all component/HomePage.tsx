"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-[90vh] w-full flex items-center">
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
                className="rounded-full px-8 border-2 shadow-sm hover:shadow-md transition-shadow"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start gap-4 pt-4"
            >
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Email" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-12 w-12 shadow-sm hover:shadow-md hover:bg-accent/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
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
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20">
              <Image
                src={theme === "dark" ? "/developer-dark.png" : "/developer-light.png"}
                alt="Developer Illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating Tech Stack */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border"
            >
              <div className="flex flex-wrap gap-2 max-w-[10rem]">
                {["React", "Next.js", "TypeScript", "Node", "Tailwind", "AWS"].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ y: -2 }}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}