import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Order';
import { Link } from 'react-router-dom';
import Dates from './dates/Dates';
import ShippingInfo from './shipping-info/ShippingInfo';
import Prices from './prices/Prices';
import PaymentInfo from './payment-info/PaymentInfo';
import Items from './items/Items';
import Similar from './similar/Similar';


const Details = ({ order }) => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className = {styles.details}>
           
            <Dates dates = {order.shippingInfo.dates} />
            
            <ShippingInfo shippingInfo = {order.shippingInfo} />
            
            <Prices prices = {order.prices} />
            
            <PaymentInfo paymentInfo = {order.paymentInfo} />
            
            <Items items = {order.items} />
            
            <Similar />

        </div>
    );
};

export default Details;