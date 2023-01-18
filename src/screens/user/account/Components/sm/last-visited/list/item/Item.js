import React from 'react';
import styles from './styles.module.css';
import Photo from './photo/Photo';
import Info from './info/Info';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <li key = {item.name} className={styles.item}>
            <Link className={styles.link} to = {`product/${item._id}`}>

                <Photo item = {item} />

                <Info item = {item} />

            </Link>
        </li>
    );
};

export default Item;