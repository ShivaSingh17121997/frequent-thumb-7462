import { Heading } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { Button } from "@chakra-ui/react";
<Button colorScheme='blue'>Button</Button>

const Login = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <Heading>Log in!</Heading>
            <input placeholder='Enter your Email address' size='lg' style={{
                backgroundColor: "lightblue",
                width: "40%",
                height: "60px",
                padding: "20px",
                borderRadius: "10px",
                border: "black",
                marginTop: "50px"

            }} />
            <br />
            <br />
            <input placeholder='Enter your Password' size='lg' style={{
                backgroundColor: "lightblue",
                width: "40%",
                height: "60px",
                padding: "20px",
                borderRadius: "10px",
                border: "black",
                marginTop: "40px"

            }} />
            <br />
            <br />
            <br />
            <br />
            <Button colorScheme='teal' size='lg' width="40%">
                Log in!
            </Button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>

    )
}

export default Login;