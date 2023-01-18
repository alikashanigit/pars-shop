import React from 'react';
import styles from './styles.module.css';


const PaymentInfo = ({ paymentInfo }) => {
    return (
        <section className = {styles.section}>
            <div className={styles.container}>
                <span className={styles.title}>نوع پرداخت</span>
                <div className={styles.value}>
                    <span>{paymentInfo.type}</span>
                </div>
            </div>
            <div className={styles.container}>
                <span className={styles.title}>درگاه پرداخت</span>
                <div className={styles.value}>
                <span>{paymentInfo.method}</span>
                </div>
            </div>
        </section>
    );
};

export default PaymentInfo;