import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { DataContext } from '../../Shop';
import Price from './price/Price';
import { product } from '../../data';



const Capacities = () => {
    const [itemIndex, setItemIndex] = useState(0);
    const { data, setData } = useContext(DataContext);
    // const { product } = useSelector(state => state.productDetails);

    useEffect(() => {
        setData({
            ...data,
            capacity: product.specs.memory.capacities && product.specs.memory.capacities[0].value,
        })
    }, [product])
    const selectCapacityHandler = (item) => {
        if (!data.color) return alert('لطفا رنگ را انتخاب کنید')
        setData({
            ...data,
            capacity: item.value,
            price: item.price,
        })
    };
    return (
        <div className={styles.capacities}>
            <span>حافظه‌ی داخلی</span>
            <ul className={styles.list} id = {!data.color ? styles.disabled : ''}>
                {product.specs.memory.capacities?.map(item => (
                <li key = {item.value} className={styles.item} 
                id = {data.color && data.capacity === item.value ? styles.selected_item : ''}
                onClick = {() => selectCapacityHandler(item)}
                >
                    <div className={styles.size}>
                        <span className={styles.value}>{item.value}</span>
                        <span className={styles.unit}>{item.unit}</span>
                    </div>
                    <Price value = {item.price} />
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Capacities;