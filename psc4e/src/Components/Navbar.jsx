import React from "react";
import { Flex, Heading } from "@chakra-ui/react"
import {Link as RouterLink} from "react-router-dom"


const Navbar = () => {

    const link = [
        { path: "/", title: "Home" },
        { path: "/login", title: "Login" },
      //  { path: "/products", title: "Product" },
      { path: "/contacts", title: "Contacts" },
        { path: "/about", title: "About" },
        
        //{ path: "/register", title: "Register" },
     
    ]

    return (
        <Flex align={"Center"}  justifyContent = {"space-around"} background={"rgb(52,58,64)"} color={"white"} fontSize={"0"}  padding={"5"}>
            {link.map((e) => (
                <RouterLink key={e.path} to={e.path} >

                    <Heading > {e.title} </Heading>
                </RouterLink>
            ))}
        </Flex>
    )
}

export default Navbar;