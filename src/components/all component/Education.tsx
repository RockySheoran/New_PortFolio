"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { GraduationCap, Trophy, BookOpenCheck, X, Download, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import Image from "next/image";

type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  downloadUrl: string;
  verifyUrl?: string;
};

export const EducationSection = () => {
  const { theme } = useTheme();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "College of Engineering, Chandigarh Group of Colleges",
      location: "Landran, Punjab",
      duration: "2022 – 2026",
      score: "CGPA: 7.55/10",
      achievements: [
        "College Hackathon participant",
        "Contributed to Girl Script Summer of Code 2024 Extended"
      ]
    },
    {
      degree: "Intermediate (HBSE)",
      institution: "Swami Vivekanand Sr. Sec. School",
      location: "Kheri Jalab, Hisar, Haryana",
      duration: "2021 - 2022",
      score: "Percentage: 75%"
    },
    {
      degree: "Matriculation (HBSE)",
      institution: "Arya Sr. Sec. School",
      location: "Haibatpur, Hisar, Haryana",
      duration: "2019 – 2020",
      score: "Percentage: 81%"
    }
  ];

  const certificates: Certificate[] = [
    {
      id: "web-design",
      title: "Web Designing Certification",
      issuer: "Solitaire Infosys",
      date: "June 2023",
      imageUrl: "/certificates/web-design.png",
      downloadUrl: "/certificates/web-design.pdf"
    },
    {
      id: "dsa-java",
      title: "Data Structures and Algorithms with Java",
      issuer: "Great Learning",
      date: "March 2024",
      imageUrl: "/certificates/dsa.jpg",
      downloadUrl: "/certificates/Rocky-dse-certificate.pdf",
      verifyUrl: ""
    },
    {
      id: "fullstack",
      title: "Full Stack Web Development Course",
      issuer: "Udemy",
      date: "January 2024",
      imageUrl: "/certificates/fullstack.jpg",
      downloadUrl: "/certificates/Full stack certificate.pdf",
      verifyUrl: ""
    }
  ];

  const skills = ["Discipline", "Adaptability", "Time Management", "Fast Learner", "Dedicated", "Teamwork"];

  return (
    <section 
      ref={targetRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 overflow-hidden"
      id="education"
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ opacity, y, scale }}
        className="absolute inset-0 -z-10"
      >
        <div className={`absolute inset-0 opacity-20 ${theme === 'dark' ? 'bg-[url(/grid-dark.svg)]' : 'bg-[url(/grid.svg)]'}`} />
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, -30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge variant="outline" className="mb-4 bg-accent/10 text-accent-foreground border-accent hover:bg-accent/20">
              <BookOpenCheck className="h-4 w-4 mr-2" />
              Academic Journey
            </Badge>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            My formal education and continuous learning path that shaped my technical expertise
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow group/card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring" }}
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </motion.div>
                  <span>Education Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Animated timeline line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30 origin-top"
                  />

                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      className="relative pl-14 pb-8 group"
                    >
                      {/* Animated timeline dot */}
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        className="absolute left-5 top-1 h-3 w-3 rounded-full bg-primary border-4 border-background z-10"
                      />

                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>{edu.institution}</span>
                          <Separator orientation="vertical" className="h-4" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="text-muted-foreground">{edu.duration}</span>
                          <motion.div whileHover={{ scale: 1.05 }}>
                            <Badge variant="secondary" className="text-xs">
                              {edu.score}
                            </Badge>
                          </motion.div>
                        </div>
                        {edu.achievements && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            className="mt-2 overflow-hidden"
                          >
                            <ul className="space-y-1">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start gap-2 text-sm"
                                  whileHover={{ x: 5 }}
                                >
                                  <Trophy className="h-4 w-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-border/50 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow group/card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                    className="p-2 rounded-full bg-primary/10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </motion.div>
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <motion.div
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedCert(cert)}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/30 transition-all bg-background hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent cursor-pointer"
                      >
                        <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {cert.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(cert.downloadUrl, '_blank');
                          }}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="h-5 w-5 text-primary"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M9 6a3 3 0 0 1 3-3h1a2 2 0 0 1 2 2v1" />
                      <path d="M9 6h6" />
                      <path d="M4 13v-1a2 2 0 0 1 2-2h1" />
                      <path d="M20 16v1a2 2 0 0 1-2 2h-1" />
                      <path d="M9 18H4" />
                      <path d="M4 12h6" />
                    </motion.svg>
                    Interpersonal Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-sm font-normal hover:bg-primary/10 hover:border-primary/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring" }}
              className="relative bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-bold">{selectedCert.title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedCert(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={selectedCert.imageUrl}
                        alt={selectedCert.title}
                        fill
                        className="object-contain"
                        quality={100}
                      />
                    </div>
                  </div>
                  <div className="md:w-80 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Issued by</h4>
                      <p className="font-medium">{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Date</h4>
                      <p className="font-medium">{selectedCert.date}</p>
                    </div>
                    <div className="flex gap-2 flex-col pt-2">
                      <Button    
                        variant="default" 
                        className="w-full"
                        onClick={() => window.open(selectedCert.downloadUrl, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      {selectedCert.verifyUrl && (
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => window.open(selectedCert.verifyUrl, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Verify
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};