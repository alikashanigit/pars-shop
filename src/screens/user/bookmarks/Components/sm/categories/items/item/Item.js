import React from 'react';
import styles from './styles.module.css';


const Item = ({ item, onRemove }) => {
    return (
        <li className = {styles.item}>
            <span>{item.name}</span>
            <button onClick={() => onRemove(item._id)}>
                -
            </button>
        </li>
    );
};

export default Item;