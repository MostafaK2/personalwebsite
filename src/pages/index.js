import { Inter } from "next/font/google";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Avatar} from "@nextui-org/react";

import {motion} from "framer-motion";

// components
import About from "@/components/About";



// assets
import test from "next/image"


// const inter = Inter({ subsets: ["latin"] });

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

const ExperienceData = [
  {
    company_name: "Stealth Startup",
    role: "Part-Time Software Engineer",
    location: "Remote",
    start_date: "2024",
    end_date: "present",
    description: [
      "Led the development of a dynamic landing page, incorporating animations and forms with React.js, while utilizing Node.js and AWS DynamoDB to efficiently store user data",
      "Collaborated with the design and development team to integrate Google Maps API and Places API to create an interactive map with real-time places information",
      "Successfully managed the entire software development lifecycle (using Agile methodology) for multiple applications, ensuring timely delivery and high-quality",

    ],
    technologies: ["React", "Node", "React.Native", "DynamoDb"]
  },

  {
    company_name: "AVA Robotics",
    role: "Intern",
    location: "Cambridge",
    start_date: "2018",
    end_date: "2019",
    description: [
      "I did this",
      "I did that",
      "I did thos sde"
    ],
    technologies: []
  }
];
import {Tabs, Tab} from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="mx-12 my-8 decrease-margin flex flex-col item-center justify-center">
        <About/>
        <section id="projects">
          <h2 className="font-bold text-2xl py-20 text-center">Projects</h2>
          <div className="w-2/3 increase-width card-parent gap-10 mx-auto">
            {projectList.map((item, index) => {
              return (
                <ProjectCard item={item}/>
            )})}
          </div>
        </section>
        
        <section id="experience">
          <h2 id="experience" className="font-bold text-2xl py-20 text-center">Experience</h2>
          <div className="w-2/3 gap-11 mx-auto increase-width">
            {ExperienceData.map((item, index) => {
              return (
                <ExperienceCard item={item}/>
              )
            })}
          </div>
        </section>
       
        {/* end of experience section */}
    </main>
  );
}
