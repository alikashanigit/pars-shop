import React from 'react';
import styles from './styles.module.css';
import Rating from './rating/Rating';
import Suggestion from './suggestion/Suggestion';


const Header = ({ currentReview }) => {
    return (
        <div className = {styles.header}>

            <div className={styles.user_info}>
                <span className = {styles.client}>سارا احمدی</span>
                <span className = {styles.user_type}>( خریدار )</span> 
            </div>
            <span className = {styles.date}>۲۴ مهر ۱۴۰۱</span>


        </div>
    );
};

export default Header;