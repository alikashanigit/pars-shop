import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Products from './screens/products/Routes';
import Product from './screens/product/Routes';
import Checkout from './screens/checkout/Routes';
import User from './screens/user/Routes';
import Support from './screens/support/Routes';
import Global from './screens/global/Routes';


const App = () => {
    return (
        <BrowserRouter>
            <Global />
            <Products />
            <Product />
            <Checkout />
            <User />
            <Support />
        </BrowserRouter>
    );
};

export default App;