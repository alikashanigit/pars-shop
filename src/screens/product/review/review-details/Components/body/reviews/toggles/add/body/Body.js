import React from 'react';
import styles from './styles.module.css';
import Comment from './comment/Comment';
import Rating from './rating/Rating';
import Suggestion from './suggestion/Suggestion';



const Body = () => {
    return (
        <div className={styles.body}>
            
            <Comment />     
            
            <Suggestion />
            
            <Rating />

        </div>
    );
};

export default Body;