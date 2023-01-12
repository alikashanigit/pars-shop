import React from 'react';
import styles from './styles.module.css';


const Discount = ({ item }) => {
    return (
        <div className = {styles.discount}>
            <span>۵</span>
            <span>٪</span>
        </div>
    );
};

export default Discount;