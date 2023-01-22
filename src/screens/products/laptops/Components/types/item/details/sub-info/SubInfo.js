import React from 'react';
import styles from './styles.module.css';
import DiscountedPrice from './discounted-price/Price';


const SubInfo = ({ item }) => {
    return (
        <div className = {styles.sub_info}>
            <div>
                <span className = {styles.color}>{item && item.color}</span>
                {item && item.feature && 
                <div className = {styles.feature}>
                    <span className = {styles.value}>{item && item.feature.value}</span>
                    <span className = {styles.unit}>{item && item.feature.unit}</span>
                </div>
                }
            </div>
            <DiscountedPrice />
        </div>
    );
};

export default SubInfo;