import React from 'react';
import styles from './styles.module.css';
import List from './list/List';


const SimilarProducts = () => {    
    return (
        <section className = {styles.section}>
            <div className = {styles.header}>
                <span className = {styles.title}>محصولات مشابه</span>
            </div>
            <List />
        </section>
    );
};

export default SimilarProducts;