import React from 'react';
import styles from './styles.module.css';


const Photo = ({ item }) => {
    return (
        <div className = {styles.photo}>
            <img alt = {item.name} 
            src = {item.cover} 
            />
        </div>
    );
};

export default Photo;