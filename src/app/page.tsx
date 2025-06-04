
import Image from "next/image";
import { Navbar } from "../components/all component/Navbar";

import HomePage from "../components/all component/HomePage";
import About from "@/components/all component/About";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <About/>
    </>
  );
}
