import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Sizes from './sizes/Sizes';



const Options = () => {   
    const { product } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.options}>
            <Sizes />
        </div>
    );
};

export default Options;