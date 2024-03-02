import ProjectCard from "../ProjectCard"
import React from "react";

const projectList = [
    {
      title: "Chat App",
      img: "/projectPictures/chatappWebPic.png",
      description: "A real time chat applications that allows for easy communication between your friend group",
      githubLink: "https://github.com/mostafak2/chat-app",
      technologies: ["Java", "HTML", "CSS","JavaScript", "ReactJs", "Spring", "Websocket", "Docker"],
    },
    {
      title: "ELENA",
      img: "/projectPictures/elena.png",
      description: "Elevation Based Navigation System that finds the shortest path in a map with taking elevation into account",
      githubLink: "https://github.com/mostafak2/compsci520_FinalProject",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "GraphQL"],
    },
    {
      title: "Clog Monitor",
      img: "/projectPictures/clogMonitor.png",
      description: "Application to view business logs and severity issues.",
      githubLink: "https://github.com/mostafak2/Clog-Monitor",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJs", "Spring", "Jenkins", "Cypress"],
    },
    {
      title: "RDT-Protocol",
      img: "/projectPictures/rdt.jpg",
      description: "Reliable Data Transfer or RDT-3.0 protocol written in python.",
      githubLink: "https://github.com/mostafak2/Reliable-Data-Transfer",
      technologies: ["Python"],
    },
  ];
  
export default function Projects({projectsRef}){
    return (
        <section ref = {projectsRef} id="projects">
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
    )
} 