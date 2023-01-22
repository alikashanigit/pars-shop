import React from 'react';
import styles from './styles.module.css';
import QtyWarning from './qty-warning/QtyWarning';


const Details = ({ item }) => {
    return (
        <div className = {styles.details}>
           
            <QtyWarning item = {item} />    
            
            <span className={styles.name}>
                {item && item.name}
            </span>
            <div>
                <span className={styles.brand}>{item && item.brand}</span>
                <span className={styles.category}>{item && item.category}</span>
            </div>
            
        </div>
    );
};

export default Details;