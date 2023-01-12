import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';
import OldPrice from './price/OldPrice';


const Shopping = () => {
    return (
        <div className={styles.shopping}>
            <button className = {styles.add_btn}>
                <span>خرید</span>
                <div>
                    <span>از</span>
                    <Price />
                </div>
            </button>
            <OldPrice />
        </div>
    );
};

export default Shopping;