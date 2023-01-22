import React, { useContext } from 'react';
import styles from './styles.module.css';
import Item from './item/Item';
import { items } from './data';
import { QueryDataContext } from '../../../../../../../../Laptops';


const Brands = ({ part }) => {
    const { queryData, setQueryData } = useContext(QueryDataContext)
    return (
        <ul className = {styles.body}>
            {items.map(item => (
            <Item
            part = {part}
            id = {item.nameEn}
            name = {item.name}
            nameEn = {item.nameEn}
            logo = {item.icon}
            />   
            ))}
        </ul>       
    );
};

export default Brands;