import React from 'react';
import styles from './styles.module.css';


const TopInfo = ({ item }) => {
    return (
        <div className = {styles.top_info}>
            <div>
                <span className={styles.brand}>{item && item.brand}</span>
                <span className={styles.category}>{item && item.category}</span>
            </div>
            <span className={styles.name}>
                {item && item.name}
            </span>
        </div>
    );
};

export default TopInfo;