import React, { useState } from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Photo from './photo/Photo';
import Details from './details/Details';


const Item = ({ item }) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <div className = {styles.item}>
            <Photo item = {item} />
            <Details item = {item} />
        </div>
    );
};

export default Item;