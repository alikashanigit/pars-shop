import React from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { Link } from 'react-router-dom';


const Accessories = () => {    
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                <span className = {styles.title}>لوازم جانبی مناسب</span>
                <Link to = 'accessories'>همه</Link>
            </div>
            <List />
        </section>
    );
};

export default Accessories;