

import { Navbar } from "../components/all component/Navbar";

import HomePage from "../components/all component/HomePage";
import AboutSection from "@/components/all component/About";
import SkillsSection from "@/components/all component/Skill";
import ProjectsSection from "@/components/all component/project/Projects";
import { EducationSection } from "@/components/all component/Education";



export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <EducationSection />
 
    </>
  );
}
