import React from 'react';
import styles from './styles.module.css';


const Classification = ({ classification }) => {
    return (
        <ul className = {styles.list}>
            {classification?.map(value => (
            <li className = {styles.item}>
                <span className = {styles.sign}></span>
                <span className = {styles.value}>{value}</span>
            </li> 
            ))}
        </ul>
    );
};

export default Classification;