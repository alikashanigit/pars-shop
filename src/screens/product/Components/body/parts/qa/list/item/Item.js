import React from 'react';
import styles from './styles.module.css';


const Item = ({ item }) => {
    return (
        <li className = {styles.item}>
            <div className = {styles.title}>
                {item.title}
            </div>
            <div className = {styles.values}>
                {item.values.map(value => (
                <div className={styles.value}>
                    <span className = {styles.value}>{value.value}</span>
                    <span className = {styles.unit}>{value.unit}</span>
                </div>
                ))} 
            </div>
        </li>
    );
};

export default Item;