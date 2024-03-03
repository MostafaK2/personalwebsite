import {motion} from "framer-motion";
import { Avatar, Button, Tooltip} from "@nextui-org/react"

export default function About({contactRef, aboutRef}){
    const title = "Hi, I'm Mostafa Kamal".split("");
    const subTitle = "I love bringing ideas to life through coding".split("")
    return (
        <section id="about" ref={aboutRef}>
            <div className="max-w-screen-md increase-width mt-24 w-2/3 mx-auto flex flex-col justify-center items-center gap-7">
            <div className="flex flex-col gap-7">
                <h1 className="text-6xl font-black about-title">
                    {title.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10
                            }}
                            key={i}
                        >
                            {el}{""}
                        </motion.span>
                    ))}
                </h1>
                <h2 className="text-3xl font-medium">
                    {subTitle.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10
                            }}
                            key={i}
                        >
                            {el}{""}
                        </motion.span>
                    ))}
                </h2>
                <p className="text-lg">I'm not just a software developer but rather I'm a storyteller, a problem-solver, and an eternal learner.
                  My journey in computer science has been a captivating adventure filled with challenges and triumphs.
                   Each experience has sculpted me into the professional I am today. 
                </p>
                
                
                <Button 
                    onClick = {() => {
                        contactRef.current?.scrollIntoView({
                        behavior:"smooth"
                      })
                    }}
                    className = "w-min px-5 py-5 text-md text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white" 
                    variant="ghost" 
                    radius="sm" 
                    color=""
                >
                    Contact Me
                </Button>  
              
                <div className="flex gap-4">
                    <Tooltip placement ="bottom" showArrow={false} content="Python">
                        <Avatar className="bg-transparent" src="./logo/pythonlogo.svg" name="Py" radius="sm"/>
                    </Tooltip>
                    
                    <Tooltip placement ="bottom" showArrow={false} content="Java">
                        <Avatar className="bg-transparent" src="./logo/javalogo.svg" name="Py" radius="sm"/>
                    </Tooltip>
                    <Tooltip placement ="bottom" showArrow={false} content="React">
                        <Avatar className="bg-transparent" src="./logo/reactlogo.svg" name="Py" radius="sm"/>
                    </Tooltip>
                    <Tooltip placement ="bottom" showArrow={false} content="Spring">
                        <Avatar className="bg-transparent" src="./logo/springlogo.svg" name="Py" radius="sm"/>
                    </Tooltip>
                    <Tooltip placement ="bottom" showArrow={false} content="Jenkins">
                        <Avatar className="bg-transparent" src="./logo/jenkinslogo.svg" name="Py" radius="sm"/>
                    </Tooltip>
                </div>          
            </div>
            </div>
        </section>
        
)}