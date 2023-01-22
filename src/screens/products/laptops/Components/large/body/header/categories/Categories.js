import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Categories = () => {
    return (
        <ul className = {styles.categories}>
            <li className={styles.item}>
                <Link to = ''>موبایل‌</Link>
            </li>
            <li className={styles.item}>
                <Link to = ''>تبلت</Link>
            </li>
            <li className={styles.item}>
                <Link to = ''>بازی</Link>
            </li>
            <li className={styles.item}>
                <Link to = ''>لوازم جانبی</Link>
            </li>
        </ul>
    );
};

export default Categories;