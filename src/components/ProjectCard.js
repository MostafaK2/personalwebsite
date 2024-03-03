import {Card, Link, Avatar,Image, Divider, Chip} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

import {motion} from "framer-motion"
import ProjectModal from "./ProjectModal";

export default function ProjectCard({item}){
    // const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return (
        <>
            <div className="card-child">
                <motion.a href={item.githubLink} target="_blank" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{scale:0.95, rotate:0}}> 
                    <Card className="cursor-pointer bg-gray-200">
                        <Image
                            alt="Card background"
                            className="mb-0 object-cover rounded-xl"
                            src={item.img} 
                        />
                    </Card>
                </motion.a>
                <div>
                    <div className="flex flex-row gap-4 justify-between">
                        <h4 className="font-bold text-lg project-title">{item.title}</h4>
                        <Divider className="my-4 w-1/2" />
                        <Link isExternal href={item.githubLink}> 
                        <Avatar isBordered className="cursor-pointer" name="git" src="/logo/githublogo.svg"></Avatar>
                        </Link>
                    </div>
                    <div>
                        <p>{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-3">
                        {item.technologies.map(item => (
                            <motion.div whileHover={{ scale: 1.1}} >
                                <Chip className="cursor-pointer">{item}</Chip>
                            </motion.div>
                        
                        ))}
                    </div>                
                </div>
            </div>
            {/* <ProjectModal isOpen={isOpen} onOpenChange={onOpenChange} item={item}/> */}
        </>
    )}