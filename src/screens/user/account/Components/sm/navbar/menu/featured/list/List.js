import React from 'react';
import styles from './styles.module.css';
import Item from './Item';


const List = () => {
    return (
        <ul className={styles.list}>
            <Item title = 'تخفیف‌های برتر' path = 'top-discounts' />
            <Item title = 'پرفروش‌ترین‌‌ها' path = 'top-sales' />
            <Item title = 'محبوب‌ترین‌ها' path = 'top-ratings' />
            <Item title = 'جدیدترین‌ها' path = 'newest' />
            <Item title = 'فروش محدود' path = 'limit-sales' />
            <Item title = 'رویداد پارس' path = 'pars-events' />
        </ul>      
    );
};

export default List;