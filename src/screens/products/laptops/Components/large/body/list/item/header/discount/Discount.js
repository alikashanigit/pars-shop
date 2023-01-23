import React from 'react';
import styles from './styles.module.css';


const Discount = ({ item }) => {
    
    return (
        item.featured.discount && item.featured.discount.price &&
        <div className = {styles.discount}>
            {item.featured.discount && item.featured.discount.price &&
            <>
            <span className={styles.value}>{item.featured.discount && item.featured.discount.percentage}</span>
            <span>٪</span>
            </>
            }
            
        </div>
    );
};

export default Discount;