import React from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { product } from '../../../../data';


const Accessories = () => {    
    // const { product: { name } } = useSelector(state => state.productDetails);
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                
                <span className = {styles.title}>
                    لوازم جانبی مناسب
                    <span className = {styles.name}>{product.name}</span>    
                </span>
                    
                <Link to = 'accessories'>همه</Link>
            </div>
            <List />
        </section>
    );
};

export default Accessories;