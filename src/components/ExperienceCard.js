import {Card, CardHeader, CardBody, Divider, Chip} from "@nextui-org/react";

export default function ExperienceCard({item}){
    return (
        <div className="mx-auto">
            <Card>
                <CardHeader className="flex flex-col justify-center">
                    <div>
                    <p className="font-bold text-lg">{item.company_name}{", "}{item.location}</p>
                    </div>
                    <div>
                    <p>{item.role}</p>  
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Chip className = "border-blue-700" color={"primary"} variant="dot" radius="sm">{item.start_date}</Chip>
                        <Chip className = "border-grey-100" color={"primary"} variant="bordered" radius="sm">{"-"}</Chip>
                        <Chip className = "border-blue-700" color={"primary"} variant="dot" radius="sm">{item.end_date}</Chip>  
                    </div>
                </CardHeader>
                <CardBody>
                    <ul className="list-disc">
                        <li>{item.description}</li>
                    </ul>
                </CardBody>
            </Card>
                
            <div className="flex flex-wrap gap-2 pt-3">
                {item.technologies.map(item => (
                    <Chip>{item}</Chip>
                ))}
            </div>
            <Divider className="my-4 w-full" />
        </div>
    )}