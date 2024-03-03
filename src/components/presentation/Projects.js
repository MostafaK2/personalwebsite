import ProjectCard from "../ProjectCard"
import React from "react";
import PROJECT_DATA from "@/lib/projectsData";
import { Link } from "@nextui-org/react";
 
export default function Projects({projectsRef}){
    return (
        <section ref = {projectsRef} id="projects">
            <h2 className="font-bold text-2xl py-20 text-center">Projects</h2>
            <div className="w-2/3 increase-width card-parent gap-10 mx-auto max-w-screen-md">
              {PROJECT_DATA.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ProjectCard item={item}/>
                  </React.Fragment>   
              )})} 
            </div>
            <Link href="https://github.com/Mostafak2" isExternal showAnchorIcon className="flex pt-1 text-center justify-center">Click Here For More Projects</Link>
        </section>
    )
} 