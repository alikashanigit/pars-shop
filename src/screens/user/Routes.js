import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Account from './account/Account';
import Bookmarks from './bookmarks/Bookmarks';
import Order from './orders/order/Order';
import Orders from './orders/Orders';
import Profile from './profile/Profile';
import Reviews from './reviews/Reviews';



const UserRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/account' element = {<Account />} />
            <Route path = '/account/profile' element = {<Profile />} />
            <Route path = '/account/orders' element = {<Orders />} />
            <Route path = '/account/orders/order/:id' element = {<Order />} />
            <Route path = '/account/reviews' element = {<Reviews />} />
            <Route path = '/account/bookmark-products' element = {<Bookmarks />} />

        </Routes>
    );
};

export default UserRoutes;