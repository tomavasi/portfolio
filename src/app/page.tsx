import Image from "next/image";
import Projects from "@/components/projects";
import Welcome from "@/components/welcome";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="relative bg-[#26577C] flex flex-col w-full items-center justify-center">
      <div className="h-screen w-full" id="welcome" >
        <Welcome />
      </div>
      <div className="h-screen w-[90%] flex items-center justify-center animate-appear" id="projects" >
        <Projects />
      </div>
      <div className="h-screen w-[90%] flex items-center justify-center animate-appear" id="about">
        <About />
      </div>

    </div>
  );
}
