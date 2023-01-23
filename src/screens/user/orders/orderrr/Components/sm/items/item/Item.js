import React from 'react';
import styles from './styles.module.css';
import { getProductDetails } from '../../../../../../../../redux/product/actions';
import Price from './price/Price';
import Capacity from './capacity/Capacity';



const Item = ({ item }) => {
    return (
        <li className={styles.item}>
            <div className={styles.container}>
                <div className={styles.product_info}>
                    <img alt={item.name} src = {item.cover}/>
                    <div>
                        <span className={styles.name}>{item.name}</span>
                        <Price value={item.price} />
                    </div>
                </div>
                <div className={styles.features}>
                    <span >{item.color}</span>
                    <Capacity value={item.capacity} />
                </div>
            </div>
            <div className={styles.qty}>
                <span>تعداد</span>
                <span>{item.qty}</span>
            </div>
        </li>
    );
};

export default Item;