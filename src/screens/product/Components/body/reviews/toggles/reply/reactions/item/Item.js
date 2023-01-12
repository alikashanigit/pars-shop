import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';


const Item = ({ children, onAction, color }) => {
    const dispatch = useDispatch();
    return (
        <li className={styles.item}>
            <button onClick = {onAction}>
                {children}
            </button>
        </li>
    );
};

export default Item;