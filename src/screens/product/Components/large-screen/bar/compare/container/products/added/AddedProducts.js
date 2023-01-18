import React from 'react';
import styles from './styles.module.css';
import List from './list/List';


const AddedProducts = () => {
    return (
        <div className={styles.added}>
            <span>محصولات انتخاب شده</span>
            <List />
        </div>
    );
};

export default AddedProducts;