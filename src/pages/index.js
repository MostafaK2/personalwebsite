import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import React from "react";
// import ExperienceCard from "@/components/ExperienceCard";
// import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import { useRef } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Projects from "@/components/presentation/Projects";
import Experiences from "@/components/presentation/Experiences";

import Head from "next/head";



function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <>
      <Head>
        <title>Mostafa Kamal's Portfolio</title>
      </Head>
      <NavBar aboutRef={aboutRef} projectsRef={projectsRef}experienceRef={experienceRef} contactRef={contactRef}/>
      <main className="mx-12 my-8 decrease-margin flex flex-col item-center justify-center">
          
          <About contactRef ={contactRef} aboutRef={aboutRef}/>
          <Projects projectsRef={projectsRef}/>
          <Experiences experienceRef={experienceRef}/>
          
          {/* max-w-screen-md => max width 750x*/}
          {/* <section ref = {projectsRef} id="projects">
            <h2 className="font-bold text-2xl py-20 text-center">Projects</h2>
            <div className="w-2/3 increase-width card-parent gap-10 mx-auto max-w-screen-md">
              {projectList.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ProjectCard item={item}/>
                  </React.Fragment>   
              )})}
            </div>
          </section> 
          <section ref={experienceRef} id="experience">
            <h2  id="experience" className="font-bold text-2xl py-20 text-center">Experience</h2>
            <div className="w-2/3 gap-11 mx-auto increase-width max-w-screen-md">
              {ExperienceData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ExperienceCard item={item}/>
                  </React.Fragment> 
                )
              })}
            </div>
          </section> */}
          
      </main>
      <Footer contactRef={contactRef}/>
    </>
  );
}

export default Home;
