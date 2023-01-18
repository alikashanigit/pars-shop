import React from 'react';
import styles from './styles.module.css';


const QtyWarning = ({ item }) => {
    return (
        item && item.quantity &&
        <span className = {styles.qty_warning}>{item && item.quantity}</span>
    );
};

export default QtyWarning;