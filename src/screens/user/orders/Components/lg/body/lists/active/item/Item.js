import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Items from './items/Items';
import Details from './details/Details';


const Item = ({ item }) => {
    return (
        <li className={styles.item}>
            <Link to = {`order/${item._id}`}>
                <Details item = {item} />
                <Items items = {item.items} />
            </Link>
        </li>
    );
};

export default Item;