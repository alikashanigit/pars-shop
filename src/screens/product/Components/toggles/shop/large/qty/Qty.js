import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { DataContext } from '../../Shop';
import { product } from '../../data';



const Qty = () => {
    // const { product } = useSelector(state => state.productDetails);
    const { data, setData } = useContext(DataContext);
    const incrementHandler = () => {
        data.qty < product.countInStock &&
        setData({
            ...data,
            qty: data.qty + 1,
        })
    };
    const decrementHandler = () => {
        data.qty > 1 &&
        setData({
            ...data,
            qty: data.qty - 1,
        })
    };
    return (
        <div className={styles.qty}>
            <div className = {styles.btns}>
                <button onClick = {incrementHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '25' height = '25' fill = 'currentColor' class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                </button>
                <button onClick = {decrementHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '25' height = '25' fill = 'currentColor' class="bi bi-dash-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                    </svg>
                </button>
            </div>
            <span className={styles.qty}>{data.qty}</span>
        </div>
    );
};

export default Qty;