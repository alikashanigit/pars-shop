import React from 'react';
import Items from '../items/Items';
import styles from './styles.module.css';


const Laptop = ({ onRemove }) => {
    return (
        <section className = {styles.section}>
            <div className={styles.header}>
                <span>لپتاپ‌ها</span>
                <button onClick = {onRemove}>حذف همه</button>
            </div>
            <Items />
        </section>
    );
};

export default Laptop;