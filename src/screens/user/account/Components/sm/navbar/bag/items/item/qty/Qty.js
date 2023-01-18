import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag, removeFromBag } from '../../../../../../../../../../redux/bag/actions';



const Qty = ({ item }) => {
    const dispatch = useDispatch();

    const [qty, setQty] = useState(1);

    const { product } = useSelector(state => state.productDetails);
    
    useEffect(() => {
        item.qty && setQty(item.qty);
    }, [item.qty]);

    const incrementHandler = () => {
        setQty(qty + 1)
        dispatch(addToBag(
            {
                product: item.product,
                color: item.color,
                capacity: item.capacity,
                qty: qty,
                price: item.price,
            }
        ));
    };
    const decrementHandler = () => {
        setQty(qty - 1)
        dispatch(addToBag(
        {
            product: item.product,
            color: item.color,
            capacity: item.capacity,
            qty: qty,
            price: item.price,
        }))
    };

    const removeHandler = () => {
        dispatch(removeFromBag(item))
    };
    return (
        <div className={styles.actions}>

            <div>
                <div className = {styles.btns}>
                    <button onClick = {incrementHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width = '20' height = '20' fill = 'currentColor' class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </button>            
                    <button onClick = {decrementHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width = '20' height = '20' fill = 'currentColor' class="bi bi-dash-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                        </svg>
                    </button>
                </div>
                <span className={styles.qty}>{qty}</span>
            </div>

            <button onClick={removeHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width= '22'height= '22' fill='#ff5555'
                class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
            </button>

        </div>
    );
};

export default Qty;