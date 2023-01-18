import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import List from './list/List';


const AddedProducts = () => {
    const { success } = useSelector(state => state.productCompare)
    useEffect(() => {
        
    }, [success])
    return (
        <div className={styles.added}>
            <span>محصولات انتخاب شده</span>
            <List />
        </div>
    );
};

export default AddedProducts;