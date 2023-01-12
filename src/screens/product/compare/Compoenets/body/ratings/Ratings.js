import React from 'react';
import styles from './styles.module.css';
import Rating from './rating/Rating';



const Ratings = () => {    
    return (
        <div className = {styles.ratings}>
            <button className = {styles.item}>
                <div className = {styles.header}>
                    <span>خریداران</span>
                    <span>4.5</span>
                </div>
                <Rating value = {4.5} />
            </button>
            <button className = {styles.item}>
                <div className = {styles.header}>
                    <span>کاربران</span>
                    <span>4</span>
                </div>
                <Rating value = {4} />
            </button>
        </div>
    );
};

export default Ratings;