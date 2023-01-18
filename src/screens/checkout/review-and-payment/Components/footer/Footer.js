import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';


const Footer = () => {
    const openGateway = () => {};
    return (
        <div className={styles.footer}>
            <div className = {styles.details}>
                <Price />
                <span className={styles.items_num}>۵ محصول</span>
            </div>
            <div className = {styles.action}>
                
                <button className = {styles.continue_link}
                onClick = {openGateway}
                >
                    پرداخت
                </button>
                
            </div>
        </div>        
    );
};

export default Footer;