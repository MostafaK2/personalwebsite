import { Avatar, Link } from "@nextui-org/react"
import React from "react"

export default function Footer() {
    return (
        <footer id="contact" className='bg-gray-200 rounded-t-2xl'>
            <div className="flex flex-col justify-center items-center py-20 gap-2">
                <Avatar radius = "sm" size="lg" src="./profile-pic.jpeg"/>
                <p className="font-bold">Mostafa Kamal </p>
                <p className="font-bold">Lets Keep in touch</p>
                <Link>Mostafajunayed20@gmail.com</Link>
                <nav>
                    <div className="flex flex-row gap-4">
                        <Link isExternal href="https://www.linkedin.com/in/mostafa-kamal-5622331b7/"> 
                            <Avatar src='./logo/linkedin.svg' size='sm' alt='git'></Avatar>
                        </Link>
                        <Link isExternal href="https://github.com/mostafak2"> 
                            <Avatar src='./logo/githublogo.svg' size='sm' alt='git'></Avatar>
                        </Link>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
