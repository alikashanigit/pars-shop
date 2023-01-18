import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Photo = ({ item }) => {
    return (
        <div className = {styles.photo}>
            <img alt = {item.name} src = {item.photo} />
        </div>
    );
};

export default Photo;