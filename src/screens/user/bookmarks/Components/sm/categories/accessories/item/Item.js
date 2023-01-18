import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const Item = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li  className={styles.item}>
            <Link to = {`order/${item}`}>
                {item}
            </Link>
        </li>
    );
};

export default Item;