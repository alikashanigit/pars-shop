import React, { useContext } from 'react';
import styles from './styles.module.css';
import { DataContext } from '../../Shop';


const Price = ({ value = '۱۵،۰۰۰،۰۰۰' }) => {
    const { data, setData } = useContext(DataContext);
    const totalPrice = data.price * data.qty;
    return (
        <div className={styles.price}>
            <span>هزینه</span>
            <div>
                <span className = {styles.value}>{totalPrice}</span>
                <span className = {styles.unit}>تومان</span>
            </div>
        </div>
    );
};

export default Price;