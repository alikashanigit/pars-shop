import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Header from './header/Header';
import Photo from './photo/Photo';
import Details from './details/Details';
import Shopping from './shopping/Shopping';


const Item = ({ item }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className = {styles.item}>
            <Header />
            <Link to = {`product/:id`}>
                <Photo item = {item} />
                <Details item = {item} />
            </Link>
            <Shopping />
        </div>
    );
};

export default Item;