import React from 'react';
import styles from './styles.module.css';


const Discount = ({ item }) => {
    
    return (
        <div className = {styles.discount}>
            {item.featured.discount && item.featured.discount.price &&
            <>
            <span>{item.featured.discount && item.featured.discount.percentage}</span>
            <span>٪</span>
            </>
            }
            
        </div>
    );
};

export default Discount;