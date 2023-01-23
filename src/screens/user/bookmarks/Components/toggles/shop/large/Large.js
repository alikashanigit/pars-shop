import React, { useState } from 'react';
import styles from './styles.module.css';
import Colors from './colors/Colors';
import Capacities from './capacities/Capacities';
import Qty from './qty/Qty';
import Price from './price/Price';
import Photos from './photos/Photos';
import { addToBag } from '../../../../../../../redux/bag/actions';
import { useDispatch } from 'react-redux';



const Large = ({ setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        color: '',
        capacity: '',
        qty: 1,
        price: 3000000,
    });
    const addToBagHandler = () => {
        dispatch(addToBag({
            product: 1,
            color: data.color,
            capacity: data.capacity,
            qty: data.qty,
            price: data.price,
        }));
    };
    const checkoutHandler = () => {};
    return (
        <div className = {styles.large}>

            <div className={styles.header}>
                <span>خرید محصول</span>
                <button onClick={() => setToggle({ shop: false })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>
            
            <div>

                <Photos />
            
                <div>

                    <Colors />
                    
                    <Capacities />

                    <Qty />

                    <Price />
            
                </div>

            </div>

            <div className = {styles.footer}>
                <button className={styles.add_btn} onClick={addToBagHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                    <span>افزودن به سبد</span>
                </button>
                <button className={styles.checkout_btn} onClick={checkoutHandler}>
                    افزودن و پرداخت
                </button>
            </div>

        </div>
    );
}

export default Large;