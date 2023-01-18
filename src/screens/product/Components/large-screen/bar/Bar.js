import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Sizes from './sizes/Sizes';


const Bar = () => {
    const { product } = useSelector(state => state.productDetails);
    return (
        <header className = {styles.header}>
            
            <div className = {styles.shop_info}>
                <Sizes />
                <div>
                    <button>سفارش دهید</button>
                </div>
            </div>


            <div className = {styles.product_info}>
                <div className = {styles.photo}>
                    <img alt={product && product.name} src = {product.cover}/>
                </div>
                <div>
                    <span className={styles.name}>{product.name}</span>
                </div>
            </div>

        </header>
    );
};

export default Bar;