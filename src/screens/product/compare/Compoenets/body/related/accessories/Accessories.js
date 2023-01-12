import React from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { product } from '../../../../data';


const Accessories = () => {    
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                <span className = {styles.title}>لوازم جانبی مناسب {product.name}</span>
            </div>
            <List />
        </section>
    );
};

export default Accessories;