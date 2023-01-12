import React from 'react';
import styles from './styles.module.css';
import Rating from './rating/Rating';
import Suggestion from './suggestion/Suggestion';


const Header = ({ currentReview }) => {
    return (
        <div className = {styles.header}>

            <div>
                
                <Rating value = {currentReview.rating} />
                
                <div className={styles.details}>
                    <span className = {styles.client}>سارا احمدی</span>
                    <span className = {styles.user_type}>( خریدار )</span> 
                    <span className = {styles.date}>۲۴ مهر ۱۴۰۱</span>
                </div>
            
            </div>

            <Suggestion currentReview = {currentReview} />

        </div>
    );
};

export default Header;