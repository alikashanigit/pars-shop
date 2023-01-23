import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';


const Prices = ({ prices }) => {
    return (
        <section className = {styles.section}>
            <span className={styles.title}>هزینه‌ها</span>
            <ul className={styles.prices}>
                <li className={styles.item}>
                    <span>محصولات</span>
                    <Price value = {prices.items} />
                </li>
                <li className={styles.item}>
                    <span>مالیات</span>
                    <Price value = {prices.tax} />
                </li>
                <li className={styles.item}>
                    <span>حمل و نقل</span>
                    <Price value = {prices.shipping} />
                </li>
                <li className={styles.item}>
                    <span>اعتبار</span>
                    <Price value = {prices.credit} />
                </li>
                <li className={styles.item}>
                    <span>تخفیف</span>
                    <Price value = {prices.discount} />
                </li>
                <li className={styles.item}>
                    <span>مجموع</span>
                    <Price value = {prices.total} />
                </li>
            </ul>
        </section>
    );
};

export default Prices;