import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Laptops from './laptops/Laptops';


const ProductsRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/' element = {<Laptops />} />
            <Route path = '/page/:pageNumber/' element = {<Laptops />} />            

        </Routes>
    );
};

export default ProductsRoutes;