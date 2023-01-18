import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';



const Items = () => {
    const { bagItems } = useSelector(state => state.bag);
    return (
        <div className = {styles.items}>
            <span>سبد خرید</span>
            {bagItems?.map(item => <Item item = {item}/>)}
        </div>
    );
};

export default Items;