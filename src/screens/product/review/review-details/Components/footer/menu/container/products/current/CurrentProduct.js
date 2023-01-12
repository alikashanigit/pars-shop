import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const CurrentProduct = () => {
    const { product } = useSelector(state => state.productDetails);
    return (
        <div className={styles.current}>
            
            <span>{product.name}</span>
            
            <img alt = {product.name} src = {product.cover}/>         

        </div>
    );
};

export default CurrentProduct;