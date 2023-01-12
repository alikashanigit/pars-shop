import React from 'react';
import styles from './styles.module.css';


const Item = ({ children, title }) => {

    return (
        <li className = {styles.item}>
            <span className = {styles.title}>{title}</span>
            {children}
        </li>
    );
};

export default Item;