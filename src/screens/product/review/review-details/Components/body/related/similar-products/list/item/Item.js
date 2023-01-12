import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Photo from './photo/Photo';
import Info from './info/Info';
import Shopping from './shopping/Shopping';


const Item = ({ item }) => {
    return (
        <li key = {item.name} className={styles.item}>
            
            <Header item = {item} />
            
            <div className = {styles.link}>
                <Photo item = {item} />
                <Info item = {item} />
            </div>

            <Shopping />

        </li>
    );
};

export default Item;