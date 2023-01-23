import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../../Orders';
import Item from './item/Item';
import { orders } from '../../../../../data';


const Active = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        toggle.active &&
        <ul className = {styles.list}>
            {orders?.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default Active;