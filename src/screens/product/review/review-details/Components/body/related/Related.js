import React from 'react';
import styles from './styles.module.css';
import Accessories from './accessories/Accessories';
import SimilarProducts from './similar-products/SimilarProducts';



const Related = () => {
    return (
        <div className = {styles.related}>
            
            <Accessories />

            <SimilarProducts />

        </div>
    );
};

export default Related;