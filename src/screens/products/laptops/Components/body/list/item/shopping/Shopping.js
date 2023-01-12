import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';
import OldPrice from './price/OldPrice';


const Shopping = ({ item }) => {

    return (
        <div className={styles.shopping}>
            <button className = {styles.add_btn}>
                <span>خرید</span>
                <div>
                    <span>از</span>
                    <Price value = {item.featured.discount && item.featured.discount.price} />
                </div>
            </button>
            {item.featured.discount && <OldPrice value = {item.minPrice} />}
            
        </div>
    );
};

export default Shopping;