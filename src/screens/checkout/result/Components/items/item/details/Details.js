import React from 'react';
import styles from './styles.module.css';
import ProductPrice from './product-price/ProductPrice';


const Details = ({ item, qty }) => {

    return (
        <div className = {styles.details}>   

            <div className = {styles.name_price}>
                <ProductPrice value = {item.price} />
                <span className={styles.name}>{item.name}</span>
            </div>
            
            <div className={styles.features}>
                {item.features.color && 
                <span className={styles.color}>
                    {item.features.color}   
                </span>}
                {item.features.capacity && 
                <span className={styles.capacity}>
                    {item.features.capacity}   
                </span>}
                {item.features.screenSize && 
                <span className={styles.screenSize}>
                    {item.features.screenSize}   
                </span>}
            </div>
            
        </div>
    );
};

export default Details;