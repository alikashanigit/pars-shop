import React from 'react';
import styles from './styles.module.css';


const PaymentInfo = ({ paymentInfo }) => {
    return (
        <section className={styles.section}>
            <span className={styles.title}>نوع پرداخت</span>
            <span className={styles.value}>{paymentInfo.type}</span>
        </section>
    );
};

export default PaymentInfo;