import React from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Similar = () => {    
    const { product: { name } } = useSelector(state => state.productDetails);
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                
                <span className = {styles.title}>
                    محصولات مشابه
                </span>
                    
                <Link to = 'similar'>همه</Link>
            </div>
            <List />
        </section>
    );
};

export default Similar;