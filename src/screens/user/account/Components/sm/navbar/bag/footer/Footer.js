import React from 'react'
import { useNavigate } from 'react-router';
import styles from './styles.module.css'



const Footer = () => {
    const navigate = useNavigate();
    const checkout = () => {
        navigate('/checkout/shipping-info');
        localStorage.setItem('lastPagePath', JSON.stringify('/'));
    };
    return (
        <div className = {styles.footer}>
            <button onClick = {checkout}>پرداخت</button>
        </div>
    )
}

export default Footer;