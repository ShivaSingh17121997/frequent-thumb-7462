import React from "react";
import {Box, Center, Image} from "@chakra-ui/react"

const ProductCard = ({id, category, title, image, price, description }) => {
    return (
     <Center>
        <Box>
            <Image src={image} />
        </Box>
    </Center>
    );
}

export default ProductCard;