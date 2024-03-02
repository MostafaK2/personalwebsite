import {Navbar, NavbarBrand,NavbarItem, NavbarContent, Link, Button, Avatar} from '@nextui-org/react'

export default function NavBar({aboutRef, projectsRef, experienceRef, contactRef}){

    const scrollToView = (ref) => {
      ref.current?.scrollIntoView({
        behavior:"smooth"
      })
    }

    return (
    <Navbar className='bg-gray-200 rounded-b-2xl' shouldHideOnScroll>
        <NavbarBrand className='flex flex-row gap-2'>
          <Avatar isBordered radius="sm" color="success" className='text-md text-black' alt='MK' 
          src='/profile-pic.jpeg' size='md'
          >
          </Avatar>
          <Link isExternal href="https://www.linkedin.com/in/mostafa-kamal-5622331b7/"> 
            <Avatar src='./logo/linkedin.svg' size='sm' alt='git'></Avatar>
          </Link>
          <Link isExternal href="https://github.com/mostafak2"> 
            <Avatar src='./logo/githublogo.svg' size='sm' alt='git'></Avatar>
          </Link>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link onClick = {()=>{scrollToView(aboutRef)}} className = "cursor-pointer text-md text-black" underline="hover">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link onClick = {()=>{scrollToView(projectsRef)}} className = "cursor-pointer text-md text-black" underline="hover">
              Projects
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link onClick = {()=>{scrollToView(experienceRef)}} className = "cursor-pointer text-md text-black" underline="hover">
              Experience
            </Link>
          </NavbarItem>
            
          <NavbarItem>
            <Link onClick = {()=>{scrollToView(contactRef)}} className = "cursor-pointer text-md text-black" underline="hover">
              Contact
            </Link>
          </NavbarItem>
          
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
          <Button as={Link} href="#" className = "w-min px-5 py-5 text-md text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white" variant="ghost" radius="sm" color="">Resume</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>)
}