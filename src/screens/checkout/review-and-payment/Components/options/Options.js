import React from 'react';
import styles from './styles.module.css';



const Options = () => {
    return (
        <form className = {styles.part}>
            <label htmlFor = 'checkout_par_discount_code'>کد تخفیف</label>         
            <div className={styles.action}>
                <input id = 'checkout_par_discount_code' type = 'text' placeholder = 'مثال: ۴۴۳۳۱۲' />
                <button type='button'>ثبت</button>
            </div>
        </form>
    );
};

export default Options;