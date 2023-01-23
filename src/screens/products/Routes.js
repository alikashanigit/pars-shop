import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Laptops from './laptops/Laptops';


const ProductsRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/products/laptops' element = {<Laptops />} />
            <Route path = '/products/laptops/page/:pageNumber/' element = {<Laptops />} />            

        </Routes>
    );
};

export default ProductsRoutes;