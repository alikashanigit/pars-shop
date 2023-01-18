import React from 'react';
import styles from './styles.module.css';
import { items } from './data';
import Item from './item/Item';


const Items = () => {
    return (
        <div className = {styles.items}>

            <span>محصولات انتخاب شده (۵ محصول)</span>

            <ul className = {styles.list}>
                {items.map((item) => <Item item = {item} />)}
            </ul>

        </div>
    );
};

export default Items;