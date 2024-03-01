import {motion} from "framer-motion";
import { Avatar, Button, Divider, Link, link } from "@nextui-org/react"

export default function About(){
    const title = "Hi, I'm Mostafa Kamal".split("");
    const subTitle = "I'm a Masters student".split("")
    return (
        <div className="increase-width my-10 w-2/3 mx-auto flex flex-col justify-center items-center height-screen-vh gap-7">
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
                <p className="text-lg">lorem eiusmod exercitation do ea amet ad nostrud. 
                    Lorem laborum dolor sint esse. Est reprehenderit ullamco pariatur et magna pariatur quis tempor. 
                    Reprehenderit culpa enim ut sunt excepteur id. Tempor velit nisi est et exercitation laboris enim
                    ipsum nulla cillum incididunt ipsum consequat in.
                </p>
                
                <a href="#contact">
                    <Button className = "w-min px-5 py-5 text-md text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white" variant="ghost" radius="sm" color="">Contact Me</Button>  
                </a>
                <div className="flex gap-4">
                    <Avatar className="bg-transparent" src="./pythonlogo.svg" name="Py" radius="sm"/>
                    <Avatar className="bg-transparent" src="./javalogo.svg" name="Py" radius="sm"/>
                    <Avatar className="bg-transparent" src="./reactlogo.svg" name="Py" radius="sm"/>
                    <Avatar className="bg-transparent" src="./springlogo.svg" name="Py" radius="sm"/>
                    <Avatar className="bg-transparent" src="./jenkinslogo.svg" name="Py" radius="sm"/>
                </div>          
            </div>
            
            <div></div>
        </div>
    )
}