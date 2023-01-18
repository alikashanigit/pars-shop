import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Photos from './photos/Photos';
import Ratings from './ratings/Ratings';
import Options from './options/Options';


const Header = () => { 
    const { product } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.lg_header}>
            
            <Photos />

            <div className={styles.container}>
                <div className = {styles.details}>
                    <span className={styles.name}>{product && product.name}</span>
                    <span>{product && product.brand}</span>
                    {/* <span>{'Apple/Laptops'}</span> */}
                </div>
                <Ratings />

                <Options />

            </div>

        </div>
    );
};

export default Header;