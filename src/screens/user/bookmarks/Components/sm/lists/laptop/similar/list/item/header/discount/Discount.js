import React from 'react';
import styles from './styles.module.css';


const Discount = ({ item }) => {
    
    return (
        item.featured && item.featured.discount && 
        <div className = {styles.discount}>
            {item.featured && item.featured.discount && item.featured && item.featured.discount.price &&
            <>
            <span className={styles.value}>{item.featured && item.featured.discount && item.featured && item.featured.discount.percentage}</span>
            <span>٪</span>
            </>
            }
            
        </div>
    );
};

export default Discount;