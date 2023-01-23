import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';
import Capacity from './capacity/Capacity';
import Qty from './qty/Qty';



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
            <Qty item = {item} />
        </li>
    );
};

export default Item;