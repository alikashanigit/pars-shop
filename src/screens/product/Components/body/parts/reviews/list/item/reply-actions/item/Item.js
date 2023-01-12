import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';


const Item = ({ children, count, onAction, color }) => {
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <button onClick = {onAction}>
                {children}
                <span className = {styles.badge}
                style = {{ color: color }}
                >{count}</span>
            </button>
        </li>
    );
};

export default Item;