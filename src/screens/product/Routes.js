import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Add from './review/add/Add';
import ReviewsAdd from './review/all/add/Add';
import All from './review/all/All';



const ProductRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/product/:id' element = {<Product />} />
            <Route path = '/product/:id/add-review' element = {<Add />} />
            <Route path = '/product/:id/reviews/' element = {<All />} />
            <Route path = '/product/:id/reviews/add-review' element = {<ReviewsAdd />} />

        </Routes>
    );
};

export default ProductRoutes;