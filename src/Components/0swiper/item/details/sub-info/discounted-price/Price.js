import React from 'react';
import styles from './styles.module.css';


const Price = ({ value = '۱۵،۰۰۰،۰۰۰' }) => {
    return (
        <div className = {styles.price}>
            <span className = {styles.value}>{value}</span>
        </div>
    );
};

export default Price;