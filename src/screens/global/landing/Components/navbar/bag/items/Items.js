import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import Item from './item/Item';
import Price from './item/price/Price';


const Items = () => {
    const navigate = useNavigate();
    const { bagItems } = useSelector(state => state.bag);
    const checkoutHandler = () => {
        localStorage.setItem('checkoutLastPath', JSON.stringify('/'));
        navigate('/checkout/shipping-info');
    };
    const totalPrice = bagItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    return (
        bagItems.length > 0
        ? <div className = {styles.items}>
            <div className={styles.header}>
                <div>
                    <span>سبد خرید</span>
                    <Price value = {totalPrice} />
                </div>
                <div>
                    <button onClick={checkoutHandler}>
                        پرداخت
                    </button>
                </div>
            </div>
            {bagItems?.map(item => <Item item = {item}/>)}
        </div>
        : <span className={styles.empty_text}>سبد خرید خالی می‌باشد</span>
    );
};

export default Items;