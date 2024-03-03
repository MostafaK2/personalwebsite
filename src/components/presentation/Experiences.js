import ExperienceCard from "../ExperienceCard";
import React from "react";

// data import
import EXPERIENCE_DATA from "@/lib/experienceData";

export default function Experiences({experienceRef}){
    return (
      <section ref={experienceRef} id="experience">
        <h2  id="experience" className="font-bold text-2xl py-20 text-center">Experience</h2>
        <div className="w-2/3 gap-11 mx-auto increase-width max-w-screen-md">
          {EXPERIENCE_DATA.map((item, index) => {
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