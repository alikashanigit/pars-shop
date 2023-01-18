import React from 'react';
import styles from './styles.module.css';
import Photo from './photo/Photo';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {
    return (
        <li key = {item.name} className={styles.item} title = {item.name}>           

            <Photo item = {item} />

            <div className = {styles.info}>
                <Link className = {styles.name} to = {`product/${item.id}`}
 
                >
                    {item.name}
                </Link>
                <button className = {styles.brand}>
                    {item.brand}
                </button>
            </div>

        </li>
    );
};

export default Item;