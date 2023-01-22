import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Photo = ({ item }) => {
    return (
        <Link className = {styles.photo} to = {`/product/${item._id}`}>
            <img alt = {item.name} 
            src = {item.cover} 
            />
        </Link>
    );
};

export default Photo;