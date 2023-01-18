import React from 'react';
import styles from './styles.module.css';


const ShippingInfo = () => {
    const address = {
        state: 'اصفهان',
        city: 'اصفهان',
        street: 'خیابان مشتاق ک ۲۳ پ ۵۶',
        zipCode: '۵۴۴۳۴',
        description: '',
    }
    return (
        <div className = {styles.shipping_info}>

            <span>اطلاعات پستی</span>

            <div className={styles.part}>
                <div>
                    <span className={styles.title}>استان - شهر</span>
                    <span className = {styles.value}>{address.state} - {address.city}</span>
                </div>
                <div>
                    <span className = {styles.title}>آدرس محل تحویل</span>
                    <span className = {styles.value}>{address.street}</span>
                </div>
                <div>
                    <span className = {styles.title}>کد پستی</span>
                    <span className = {styles.value}>{address.zipCode}</span>
                </div>
            </div>

            <div className={styles.part}>
                <span className={styles.title}>روز و ساعت تحویل</span>
                <span className={styles.value}>شنبه ۹ مهر</span>
                <span className={styles.time_value}>۹ <span>الی</span> ۱۲ <span>پیش از ظهر</span></span>
            </div>
            
        </div>
    );
};

export default ShippingInfo;