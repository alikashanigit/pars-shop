import React from 'react';
import styles from './styles.module.css';


const Photo = ({ item }) => {
    return (
        <div className={styles.photo}>
            <img alt = {item && item.name} src = {item && item.photo} />
        </div>
    );
};

export default Photo;