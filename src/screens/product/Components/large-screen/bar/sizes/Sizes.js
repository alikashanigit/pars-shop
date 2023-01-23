import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Price from './price/Price';
import { product } from '../../../../data';



const Sizes = () => {   
    // const { product } = useSelector(state => state.productDetails);
    return (
        <ul className = {styles.list}>
            {product.specs && product.specs.display && product.specs.display.sizes?.map(item => (
            <li className={styles.item}>
                <div className = {styles.option}>
                    <span className={styles.value}>“{item.value}</span>
                    <span className={styles.unit}>اینچ</span>
                </div>
                <Price value = {item.price} />
            </li>
            ))}
        </ul>
    );
};

export default Sizes;