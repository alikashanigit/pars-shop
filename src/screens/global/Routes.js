import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './landing/Landing';


const GlobalRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/' element = {<Landing />} />
            <Route path = '/page/:pageNumber/' element = {<Landing />} />            

        </Routes>
    );
};

export default GlobalRoutes;