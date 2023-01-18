import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Qty from './qty/Qty';
import Price from './price/Price';
import Capacity from './capacity/Capacity';
import { useDispatch } from 'react-redux';


const Item = ({ item }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

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