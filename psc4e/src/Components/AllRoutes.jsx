import React from "react";
import { Routes, Route } from "react-router-dom"
import Product from "../Pages/Product";
import Register from "../Pages/Register";
import SingleProduct from "../Pages/SingleProduct";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Login from "../Pages/Login";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />

        </Routes>

    )
}

export default AllRoutes;