import React from 'react';
import styles from './styles.module.css';


const WiFi = ({ wifi }) => {
    return (
        <ul className = {styles.list}>
            {wifi?.map(value => (
            <li className = {styles.item}>
                <span className = {styles.sign}></span>
                <span className = {styles.value}>{value}</span>
            </li> 
            ))}
        </ul>
    );
};

export default WiFi;