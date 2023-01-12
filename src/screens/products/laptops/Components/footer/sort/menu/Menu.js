import React, { useContext } from 'react';
import { QueryDataContext } from '../../../../Laptops';
import Item from './item/Item';
import styles from './styles.module.css';


const Menu = () => {
    const { setQueryData } = useContext(QueryDataContext)
    return (
        <ul class = "dropdown-menu" id = {styles.menu}>
            <Item 
            title = 'جدیدترین'
            up = 'newest-up'
            down = 'newest-down'
            />
            <Item 
            title = 'محبوب‌ترین'
            up = 'popular-up'
            down = 'popular-down'
            />
            <Item 
            title = 'پرفروش‌ترین'
            up = 'sales-up'
            down = 'sales-down'
            />
            <Item 
            title = 'گران‌ترین'
            up = 'price-up'
            down = 'price-down'
            />
        </ul>
    );
};

export default Menu;