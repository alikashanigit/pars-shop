import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Photo from './photo/Photo';
import Details from './details/Details';


const Item = ({ item }) => {
    return (
        <li className = {styles.item}>
            <Link to = {`product/${item._id}`}>
                <img alt={item.name} src = {item.cover}/>
                <div className={styles.details}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.type}>{item.type}</span>
                </div>
            </Link>
        </li>
    );
};

export default Item;