import React from 'react';
import styles from './styles.module.css';


const Price = ({ value = '۱۵،۰۰۰،۰۰۰' }) => {
    return (
        <div className = {styles.price}>
            <span className = {styles.value}>{value}</span>
            <span className = {styles.unit}>ت</span>
        </div>
    );
};

export default Price;