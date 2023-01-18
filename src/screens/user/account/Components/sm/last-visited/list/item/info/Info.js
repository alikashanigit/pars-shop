import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Info = ({ item }) => {
    return (
        <div className = {styles.info}>
                        
            <span className = {styles.name}>
                {item.name}
            </span>
      
            <span className = {styles.category}>
                <span>{item.category}</span>
            </span>

        </div>
    );
};

export default Info;