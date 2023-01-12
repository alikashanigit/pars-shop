import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Products from './screens/products/Routes';
import Product from './screens/product/Routes';


const App = () => {
    return (
        <BrowserRouter>
            <Products />
            <Product />
        </BrowserRouter>
    );
};

export default App;