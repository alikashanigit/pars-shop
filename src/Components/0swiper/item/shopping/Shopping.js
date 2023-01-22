import React from 'react';
import styles from './styles.module.css';
import Add from './add/Add';
import Price from './price/Price';


const Shopping = ({ item }) => {
    return (
        <div className = {styles.shopping}>
            <Add />
            <Price item={item} />
            <span id = {styles.per}>10%</span>
        </div>
    );
};

export default Shopping;