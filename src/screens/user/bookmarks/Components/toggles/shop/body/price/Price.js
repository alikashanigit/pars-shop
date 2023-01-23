import React, { useContext } from 'react';
import styles from './styles.module.css';
import { DataContext } from '../../Shop';
import { useSelector } from 'react-redux';


const Price = ({ value = '۱۵،۰۰۰،۰۰۰' }) => {
    const { data, setData } = useContext(DataContext);
    const { product } = useSelector(state => state.productDetails);
    const defaultPrice = product.specs.memory.capacities && product.specs.memory.capacities[0].price
    const totalPrice = data.price * data.qty;
    return (
        <div className={styles.price}>
            <span>هزینه</span>
            <div>
                <span className = {styles.value}>{totalPrice ? totalPrice : defaultPrice}</span>
                <span className = {styles.unit}>تومان</span>
            </div>
        </div>
    );
};

export default Price;