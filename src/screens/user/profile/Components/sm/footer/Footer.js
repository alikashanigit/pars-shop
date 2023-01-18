import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Footer = ({ orders }) => {
    return (
        orders.length > 0 &&
        <footer className = {styles.footer}>
            <Link to = '/orders/active'>
                <span>سفارش(های) فعال</span>
                <span>{orders.length}</span>
            </Link>
        </footer>
    );
};

export default Footer;