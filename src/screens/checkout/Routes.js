import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewAndPayment from './review-and-payment/ReviewAndPayment';
import ShippingInfo from './shipping-info/ShippingInfo';
import Result from './result/Result';



const CheckoutRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/checkout/shipping-info' element = {<ShippingInfo />} />
            <Route path = '/checkout/review-and-payment' element = {<ReviewAndPayment />} />
            <Route path = '/checkout/result/:id' element = {<Result />} />

        </Routes>
    );
};

export default CheckoutRoutes;