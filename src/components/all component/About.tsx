"use client";

import { motion } from "framer-motion";
import { Code, Rocket, BookOpen, Lightbulb, FileText, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Rocky</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Full Stack Developer specializing in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg leading-relaxed bg-muted/50 p-6 rounded-lg border-l-4 border-primary"
              >
                <span className="font-semibold text-primary">Aspiring Full Stack Developer</span> specializing in Next.js and Node.js, with hands-on experience building real-time applications. Strong problem-solver focused on efficient, scalable solutions and effective team collaboration.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Next.js & React</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 text-blue-500" />
                  <span>Node.js Backend</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-purple-500" />
                  <span>Continuous Learner</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="outline"
                className="rounded-full px-8 border-primary/50 hover:border-primary group relative overflow-hidden mt-8"
              >
                <span className="relative z-10 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-primary" />
                  <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                    View Full Resume
                  </span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Rocket className="h-6 w-6 text-primary" />
                  <span>Key Highlights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Experience */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10">
                    <Code className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Full Stack Developer Intern</h4>
                    <p className="text-sm text-muted-foreground">
                      Developed financial dashboard with Next.js 14, TypeScript, Node.js and shadcn/ui
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Prasunet Company | Mar-Apr 2025</p>
                  </div>
                </motion.div>

                {/* Projects */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Lightbulb className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Notable Projects</h4>
                    <p className="text-sm text-muted-foreground">
                      Balance (Finance App) & Hemolink (Blood Donation Platform)
                    </p>
                  </div>
                </motion.div>

                {/* Skills */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10">
                    <BrainCircuit className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Technical Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Next.js, React, Node.js, MongoDB, PostgreSQL, Redis
                    </p>
                  </div>
                </motion.div>

                {/* Approach */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <Lightbulb className="h-5 w-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Development Approach</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on clean code, performance optimization, and user experience
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}