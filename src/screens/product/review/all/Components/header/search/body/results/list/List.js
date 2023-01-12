import React from 'react';
import styles from './styles.module.css';
import { products } from './data';
import Item from './item/Item';



const List = () => {
    return (
        <ul className = {styles.list} >
            {products.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default List;