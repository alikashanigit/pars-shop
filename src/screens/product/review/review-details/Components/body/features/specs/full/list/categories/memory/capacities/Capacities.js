import React from 'react';
import styles from './styles.module.css';


const Capacities = ({ capacities }) => {
    return (
        <ul className = {styles.list}>
            {capacities?.map(value => (
            <li className = {styles.item}>
                <span className = {styles.sign}></span>
                <div>
                    <span className = {styles.value}>{value.value}</span>
                    <span className = {styles.unit}>{value.unit}</span>
                </div>
            </li> 
            ))}
        </ul>
    );
};

export default Capacities;