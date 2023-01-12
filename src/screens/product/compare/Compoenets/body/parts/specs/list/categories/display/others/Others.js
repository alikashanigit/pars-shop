import React from 'react';
import styles from './styles.module.css';


const Others = ({ display }) => {
    return (
        <ul className = {styles.list}>
            {display.others?.map(value => (
            <li className = {styles.item}>
                <span className = {styles.sign}></span>
                <span className = {styles.value}>{value}</span>
            </li> 
            ))}
        </ul>
    );
};

export default Others;