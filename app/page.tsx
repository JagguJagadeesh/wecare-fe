import { Button } from "@/components/ui/button";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import Link from "next/link";
import img from '@/public/home-bg.jpg'


export default function Home() {
  
  const styling = {
      backgroundImage: `url('${img.src}')`,
      width: '100%',
      height: '90vh',
      }
  return (
    <div  >
      <div>
      <Navbar className="bg-black text-white px-4 py-2 bg-opacity-80">
      <NavbarBrand>
        <a href='/'><p className="font-bold text-inherit text-4xl">WeCare</p></a>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/doctor">
            Doctor
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="/patient">
            Patient
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact 
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resource
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/auth/signin">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button className="border-2" >
          <Link color="foreground" href="/auth/signup">
            Sign up
          </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
    <div  style={styling}>
    <div className="w-1/2 pl-10 pt-24 text-black">
      <p className="text-6xl font-monoo font-medium">Welcome to <span className="font-extrabold">WeCare</span></p>
      <p className="text-2xl text-wrap mt-4 font-sans font-thin">Intuitive dashboards empower users with actionable insights, enabling efficient and personalized healthcare management.</p>
    </div>
    </div>
    <div id="services" className="text-center h-96 p-8">
      <p>Services</p>
    </div>
    <div id="about" className="text-center h-96 p-8">
      <p>About US</p>
    </div>
    </div>
  );
}
