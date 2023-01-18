import React, { useState } from 'react';
import styles from './styles.module.css';
import Details from './details/Details';
import Actions from './actions/Actions';


const Item = ({ item }) => {
    const [qty, setQty] = useState(item.qty);
    return (
        <li key = {item.name} className = {styles.item}>
                    
            <div className = {styles.photo}>
                <img alt = {item.name} src = {item.photo} />
            </div>

            <Details item = {item} qty = {qty} />

        </li>
    );
};

export default Item;