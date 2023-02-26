import React, { useEffect, useReducer } from "react";
import axios from "axios"
import { GridItem, Heading } from "@chakra-ui/react";
import ProductCard from "../Components/ProductCard";
import {Box, Grid, } from "@chakra-ui/react"



const initstate = {
    Product: [],
    isLoading: false,
    isError: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                Product: action.payload,
                isLoading: false,
                isError: false,
            }
        case "FETCH_FAILURE":
            return {
                ...state,
                Product: [],
                isLoading: false,
                isError: action.payload,
            }
        default:
            throw new Error();
    }
};

const Product = () => {

    const [state, dispatch] = useReducer(reducer, initstate)
    const { product, isLoading, isError } = state;

    const getData = () => {
        dispatch({ type: "FETCH_REQUEST" })

        axios.get("http://localhost:8080/products")
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", payload: res.data })

                console.log(res)
            })
            .catch((err) => {
                dispatch({ type: "FETCH_FAILURE", payload: err.message })
            })
    }
    useEffect(() => {
        getData();
    }, []);

    //console.log(product)


    return (
        <Box>
            <Heading>Product</Heading>
            <Grid templateColumns="repeat(4,1fr)" gap={6} >
                {product?.length &&
                    product.map((e) => (
                        <GridItem key={e.id} >
                            <ProductCard
                                key={e.id}
                                category={e.category}
                                image={e.image}
                                price={e.price}
                                title={e.title}
                                description={e.description}

                            />
                        </GridItem>
                    ))}
            </Grid>
        </Box>
    )
}

export default Product;