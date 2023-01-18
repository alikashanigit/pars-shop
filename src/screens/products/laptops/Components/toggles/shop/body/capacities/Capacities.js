import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { DataContext } from '../../Shop';
import Price from './price/Price';



const Capacities = () => {
    const { data, setData } = useContext(DataContext);
    const { product } = useSelector(state => state.productDetails);

    

    const selectCapacityHandler = (item) => {
        setData({
            ...data,
            capacity: item.value,
            price: item.price,
        })
    };
    return (
        <div className={styles.capacities}>
            <span>حافظه‌ی داخلی</span>
            <ul className={styles.list}>
                {product.specs.memory.capacities?.map(item => (
                <li key = {item.value} 
                className={styles.item} 
                id = {data.capacity === item.value ? styles.selected_item : ''}
                onClick = {() => selectCapacityHandler(item)}
                >
                    <div className={styles.size}>
                        <span className={styles.value}>“{item.value}</span>
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