import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import List from './list/List';


const Accessories = () => {    
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                
                <span className = {styles.title}>
                    لوازم جانبی لپتاپ
                </span>
                    
                <Link to = ''
                // to = 'accessories'
                >
                    همه
                </Link>
            </div>
            <List />
        </section>
    );
};

export default Accessories;