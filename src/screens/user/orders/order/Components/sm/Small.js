import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../Order';
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Dates from './dates/Dates';
import ShippingInfo from './shipping-info/ShippingInfo';
import PaymentInfo from './payment-info/PaymentInfo';
import Items from './items/Items';
import { order } from '../../data';
import Prices from './prices/Prices';



const Small = () => {
    const { toggle } = useContext(ToggleContext);
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <Header orderCode = {order.orderCode} status = {order.status} />
            
            <div className = {styles.body}>
                
                <Dates dates = {order.dates} />
                
                <ShippingInfo shippingInfo = {order.shippingInfo} />
                
                <PaymentInfo paymentInfo = {order.paymentInfo} />
                
                <Prices prices = {order.prices} />
                
                <Items items = {order.items} />

            </div>
                
        </div>
    );
};

export default Small;