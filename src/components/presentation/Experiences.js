import ExperienceCard from "../ExperienceCard";
import React from "react";


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

export default function Experiences({experienceRef}){

    return (
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
      </section>
    )
} 