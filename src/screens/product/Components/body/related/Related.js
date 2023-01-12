import React from 'react';
import styles from './styles.module.css';
import Accessories from './accessories/Accessories';
import Similar from './similar/Similar';



const Related = () => {
    return (
        <div className = {styles.related}>
            
            <Accessories />

            <Similar />

        </div>
    );
};

export default Related;