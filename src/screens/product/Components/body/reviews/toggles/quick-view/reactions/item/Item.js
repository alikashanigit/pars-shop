import React from 'react';
import styles from './styles.module.css';


const Item = ({ children, count, onAction }) => {
    return (
        <li className={styles.item}>
            <button onClick = {onAction}>
                {children}
                <span className = {styles.badge}>{count}</span>
            </button>
        </li>
    );
};

export default Item;