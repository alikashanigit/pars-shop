import React from 'react';
import styles from './styles.module.css';


const Sizes = ({ sizes }) => {
    return (
        <ul className = {styles.list}>
            {sizes?.map(size => (
            <li className = {styles.item}>
                <span className = {styles.value}>{size.value}“</span>
                <span className = {styles.unit}>اینچ</span>
            </li> 
            ))}
        </ul>
    );
};

export default Sizes;