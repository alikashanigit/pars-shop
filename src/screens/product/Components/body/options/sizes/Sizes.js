import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Price from './price/Price';



const Sizes = () => {   
    const { product } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.sizes}>
            <span className={styles.title}>ابعاد صفحه‌ی نمایش</span>
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
        </div>
    );
};

export default Sizes;