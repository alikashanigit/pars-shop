import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Photo from './photo/Photo';
import Details from './details/Details';


const Item = ({ item }) => {
    return (
        <div className = {styles.item}>
            <Header />
            <Link to = {`product/:id`}>
                <Photo item = {item} />
                <Details item = {item} />
            </Link>
        </div>
    );
};

export default Item;