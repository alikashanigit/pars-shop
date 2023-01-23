import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';



const Details = ({ item }) => {
    return (
        <div className = {styles.details}>
                       
            <div className = {styles.top_info}>
                <span className={styles.brand}>{item.brand}</span>
                <span className={styles.name}>{item.name}</span>
            </div>
            
            <div className = {styles.shopping_info}>
                <div className={styles.qty}>
                    <span className={styles.value}>{item.qty}</span>
                    <span className={styles.title}>عدد</span>
                </div>
                <Price value={item.price}/>
            </div>

        </div>
    );
};

export default Details;