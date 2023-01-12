import React from 'react';
import styles from './styles.module.css';
import Item from './Item';


const List = () => {
    return (
        <ul className={styles.list}>
            <Item title = 'آنلاین' path = 'support/online' />
            <Item title = 'تیکت‌ها' path = 'support/tickets' />
            <Item title = 'پشتیبانی' path = 'support' />
        </ul>      
    );
};

export default List;