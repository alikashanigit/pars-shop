import React from 'react';
import styles from './styles.module.css';
import { Apple } from './icons';
import Item from './item/Item';


const Brands = ({ part }) => {
    return (
        <ul className = {styles.body}>
            
            <Item
            part = {part}
            id = 'apple'
            name = 'اپل'
            nameEn = 'Apple'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'samsung'
            name = 'سامسونگ'
            nameEn = 'Samsung'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'microsoft'
            name = 'مایکروسافت'
            nameEn = 'Microsoft'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'acer'
            name = 'ایسر'
            nameEn = 'Acer'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'asus'
            name = 'ایسوس'
            nameEn = 'Asus'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'hp'
            name = 'اچ پی'
            nameEn = 'HP'
            logo = {<Apple />}
            />
            <Item
            part = {part}
            id = 'dell'
            name = 'دل'
            nameEn = 'Dell'
            logo = {<Apple />}
            />

        </ul>       
    );
};

export default Brands;