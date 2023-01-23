import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../../Reviews';
import Item from './item/Item';
import { products } from './data';
import Similar from './similar/Similar';


const Waiting = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        toggle.waiting &&
        <div>
            <ul className = {styles.list}>
                {products?.map(item => <Item item = {item} />)}
            </ul>
            <Similar />
        </div>
    );
};

export default Waiting;