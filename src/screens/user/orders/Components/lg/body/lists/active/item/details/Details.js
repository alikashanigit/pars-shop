import React from 'react';
import Price from './price/Price';
import styles from './styles.module.css';


const Details = ({ item }) => {
    return (
        <div className = {styles.details}>
            <div>
                <span className={styles.status}>{item.status}</span>
                <div className={styles.code}>
                    <span className={styles.title}>شماره‌ی سفارش</span>
                    <span className={styles.value}>{item.orderCode}</span>
                </div>
            </div>
            <div className={styles.dates}>
                <div className={styles.ordered}>
                    <span className={styles.title}>تاریخ سفارش</span>
                    <span className={styles.value}>{item.shippingInfo.dates.order.day}</span>
                </div>
                <div className={styles.delivered}>
                    <span className={styles.title}>تاریخ تحویل</span>
                    <span className={styles.value}>{item.shippingInfo.dates.deliver.day}</span>
                </div>
            </div>
            <div className={styles.price}>
                <span className={styles.title}>مبلغ</span>
                <Price value = {item.prices.total} />
            </div>
        </div>
    );
};

export default Details;