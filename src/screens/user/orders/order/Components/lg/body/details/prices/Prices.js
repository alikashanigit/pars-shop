import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';


const Prices = ({ prices }) => {
    return (
        <div className={styles.prices}>
            <span className={styles.title}>هزینه‌ها</span>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <span className={styles.sub_title}>محصولات</span>
                    <Price value = {prices.items} />
                </li>
                <li className={styles.item}>
                    <span className={styles.sub_title}>حمل و نقل</span>
                    <Price value = {prices.shipping} />
                </li>
                <li className={styles.item}>
                    <span className={styles.sub_title}>مالیات</span>
                    <Price value = {prices.tax} />
                </li>
                <li className={styles.item}>
                    <span className={styles.sub_title}>تخفیف</span>
                    <Price value = {prices.discount} />
                </li>
                <li className={styles.item}>
                    <span className={styles.sub_title}>کل</span>
                    <Price value = {prices.total} />
                </li>
            </ul>
        </div>
    );
};

export default Prices;