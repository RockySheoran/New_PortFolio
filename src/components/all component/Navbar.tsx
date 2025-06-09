"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ChevronRight, ArrowUp, Dot } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";

import { ThemeToggle } from "../Theme/theme-toggle";
import { cn } from "@/lib/utils";

const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "education", name: "Education" },
  { id: "contact", name: "Contact" },
];

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  // Improved active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    setShowScrollTop(latest > 300);
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    setActiveSection("home");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg py-2 border-b border-border/30"
            : "bg-background/90 backdrop-blur-lg py-3"
        )}
      >
        <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            onClick={scrollToTop}
            className="cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.span
              className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundPosition: '100%',
                transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
              }}
              style={{ 
                backgroundSize: '300% 100%',
                backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)'
              }}
            >
              Portfolio
            </motion.span>
          </motion.div>

          {/* Desktop Navigation with Enhanced Active State */}
          <nav className="hidden md:flex items-center gap-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -2,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-xl group transition-all",
                    activeSection === section.id 
                      ? "text-white font-semibold" 
                      : "text-foreground/80 hover:text-foreground"
                  )}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {section.name}
                    {activeSection === section.id && (
                      <motion.span
                        className="ml-1"
                        initial={{ rotate: 0, scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{ 
                          duration: 0.6,
                          type: "spring",
                          bounce: 0.5
                        }}
                      >
                        <Dot className="h-5 w-5" />
                      </motion.span>
                    )}
                  </span>
                  {activeSection === section.id && (
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl shadow-md"
                      layoutId="activeNavItem"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Button>
              </motion.div>
            ))}

            {/* Theme Toggle with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: sections.length * 0.1,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="ml-2"
            >
              <div className="p-1 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10">
                <ThemeToggle />
              </div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button with Bounce */}
          <motion.div
            className="md:hidden z-50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="relative rounded-xl p-2"
            >
              <motion.div
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { 
                    rotate: 90, 
                    scale: 1.1,
                    transition: { 
                      type: "spring",
                      bounce: 0.6,
                      duration: 0.5
                    }
                  },
                  closed: { 
                    rotate: 0, 
                    scale: 1,
                    transition: { 
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.3
                    }
                  }
                }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
              <motion.span
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20"
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={{
                  open: { 
                    opacity: 1, 
                    scale: 1.1,
                    transition: { 
                      type: "spring",
                      bounce: 0.5
                    }
                  },
                  closed: { 
                    opacity: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.2
                    }
                  }
                }}
              />
            </Button>
          </motion.div>
        </div>

        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Gradient Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed inset-0 bg-gradient-to-b from-black/70 via-purple-900/40 to-black/70 backdrop-blur-lg md:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu Content with Bounce */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ 
                  x: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    damping: 15,
                    stiffness: 200
                  }
                }}
                exit={{ 
                  x: "100%", 
                  opacity: 0,
                  transition: {
                    type: "spring",
                    bounce: 0,
                    damping: 30,
                    stiffness: 200
                  }
                }}
                className="fixed top-0 right-0 w-[70%] h-screen max-w-xs flex flex-col pt-24 px-5 pb-20 md:hidden bg-background border-l border-purple-500/30 shadow-2xl"
              >
                <div className="flex-1 flex flex-col gap-3">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: 0.1 + index * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between text-base py-5 px-4 rounded-xl group transition-all duration-300",
                          activeSection === section.id
                            ? "bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary font-medium shadow-md"
                            : "text-foreground/80 hover:text-foreground hover:bg-accent/50"
                        )}
                        onClick={() => scrollToSection(section.id)}
                      >
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex items-center gap-3"
                        >
                          {activeSection === section.id ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-600 shadow-sm"
                            />
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-transparent" />
                          )}
                          {section.name}
                        </motion.span>
                        {activeSection === section.id && (
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + index * 0.05 }}
                          >
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </motion.div>
                        )}
                      </Button>
                      {index < sections.length - 1 && (
                        <motion.div 
                          className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ 
                            scaleX: 1,
                            transition: { delay: 0.15 + index * 0.05 }
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Theme Toggle with Gradient Border */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.4 }
                  }}
                  className="flex justify-center mt-8"
                >
                  <div className="p-1 rounded-full bg-gradient-to-r from-primary to-purple-600">
                    <div className="bg-background p-1 rounded-full">
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                type: "spring",
                bounce: 0.6,
                duration: 0.5
              }
            }}
            exit={{ 
              opacity: 0, 
              y: 20,
              transition: { duration: 0.3 }
            }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ 
              scale: 1.1, 
              y: -3,
              transition: { duration: 0.3 }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: { type: "spring", stiffness: 400 }
            }}
          >
            <ArrowUp className="h-5 w-5" />
            <motion.span 
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}