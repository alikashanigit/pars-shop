import React from 'react';
import styles from './styles.module.css';


const Dates = ({ dates }) => {
    return (
        <div className={styles.dates}>
            <div className={styles.order}>
                <span className={styles.title}>تاریخ سفارش</span>
                <div>
                    <span className={styles.day}>{dates.order.day}</span>
                    <span>-</span>
                    <span className={styles.time}>{dates.order.time}</span>
                </div>
            </div>
            <div className={styles.deliver}>
                <span className={styles.title}>تاریخ تحویل</span>
                <div>
                    <span className={styles.day}>{dates.deliver.day}</span>
                    <span>-</span>
                    <span className={styles.time}>{dates.deliver.time}</span>
                </div>
            </div>
        </div>
    );
};

export default Dates;