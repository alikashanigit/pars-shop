import React from 'react';
import styles from './styles.module.css';
import Comment from './comment/Comment';
import Rating from './rating/Rating';



const Body = () => {
    return (
        <div className={styles.body}>
            
            <Comment />     
            
            <Rating />

        </div>
    );
};

export default Body;