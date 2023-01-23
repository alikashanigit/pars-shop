import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Photo = ({ item }) => {
    return (
        <Link className = {styles.photo} to = ''
        // to = {`product/${item._id}`}
        >
            <img alt = {item.name} src = {item.photo} />
        </Link>
    );
};

export default Photo;