import React from 'react';
import styles from './styles.module.css';


const Capacity = ({ value = '256', unit = 'گیگابایت' }) => {
    return (
        <div className = {styles.capacity}>
            <span className = {styles.value}>{value}</span>
            <span className = {styles.unit}>{unit}</span>
        </div>
    );
};

export default Capacity;