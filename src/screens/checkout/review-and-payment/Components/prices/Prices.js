import React from 'react';
import styles from './styles.module.css';
import Price from './price/Price';



const Prices = () => {
    return (
        <ul className = {styles.part}>
            <span>هزینه‌ها</span>
            <li>
                <span className = {styles.title}>محصولات (۵)</span>
                <Price />
            </li>
            <li>
                <span className = {styles.title}>حمل و نقل</span>
                <Price />
            </li>
            <li>
                <span className = {styles.title}>مالیات</span>
                <Price />
            </li>
            <li>
                <span className = {styles.title}>تخفیف (۵٪)</span>
                <Price />
            </li>
            <li>
                <span className = {styles.title}>اعتبار استفاده شده</span>
                <Price />
            </li>
            <li>
                <span className = {styles.title}>کل</span>
                <Price />
            </li>
            
        </ul>
    );
};

export default Prices;