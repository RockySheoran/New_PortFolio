

import { Navbar } from "../components/all component/Navbar";

import HomePage from "../components/all component/HomePage";
import AboutSection from "@/components/all component/About";
import SkillsSection from "@/components/all component/Skill";
import ProjectsSection from "@/components/all component/project/Projects";
import { EducationSection } from "@/components/all component/Education";
import { ContactSection } from "@/components/all component/ContactSection";



export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <EducationSection />
    <ContactSection/>
    <footer className="w-full py-3 border-t border-neutral-100 dark:border-neutral-800 transition-colors">
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col items-center gap-1 text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} — All Rights Reserved
          </p>
          <div className="h-px w-8 bg-neutral-200 dark:bg-neutral-700 my-1" />
          
        </div>
      </div>
    </footer>
 
    </>
  );
}
