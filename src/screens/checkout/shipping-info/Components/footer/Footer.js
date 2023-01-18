import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Price from './price/Price';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className = {styles.details}>
                <Price />
                <span className={styles.items_num}>۵ محصول</span>
            </div>
            <div className = {styles.action}>
                
                <Link className = {styles.continue_link} to = '/checkout/review-and-payment'>ادامه</Link>
                
            </div>
        </div>        
    );
};

export default Footer;