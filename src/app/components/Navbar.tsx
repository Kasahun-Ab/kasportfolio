import React from "react";
import {motion} from 'framer-motion';
const NAV_MENU = [
  {
    name: "Home",
    href:'/'
  
  },
  {
    name: "My resume",
    href:''
  },
  {
    name: "About",
    href:''
   
  },
  {
    name: "Projects",
    href:''
   
  },
  {
    name: "Contact us",
    href:''
  },
 
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
     className=" flex items-center   text-black font-normal text-sm "
       >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {


  return (
    <nav  className="  bg-white fixed z-40 w-full py-7 shadow-lg top-0  ">
      <div className="  ">
      <div className="  container px-16  mx-auto  flex items-center justify-between">
        <p  className="   text-2xl font-bold">
      Developer K
        </p>

       
        <ul className=" hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name  }) => (
            <NavItem key={name}>
             
              {name}
            </NavItem>
          ))}
        </ul>
      

        
      </div>
      </div>
      </nav>
  );
}

export default Navbar;
