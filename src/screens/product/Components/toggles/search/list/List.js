import React from 'react';
import styles from './styles.module.css';
import Item from './item/Item';
import { useSelector } from 'react-redux';



const List = ({ products }) => {
    return (
        <ul className = {styles.list} >
            {products.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default List;