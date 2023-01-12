import React from 'react';
import styles from './styles.module.css';
import Rating from './Rating';


const Body = () => {
    return (
        <ul className={styles.list}>
            <li className = {styles.item}>
                <div className = {styles.header}>
                    <span>دوربین</span>
                    <div className = {styles.rating}>
                        <Rating />
                        <span>(۵)</span>
                    </div>
                </div>
                <div className = {styles.value}>
                    نظر تخصصی........
                </div>
            </li>
            <li className = {styles.item}>
                <div className = {styles.header}>
                    <span>نمایشگر</span>
                    <div className = {styles.rating}>
                        <Rating />
                        <span>(۴)</span>
                    </div>
                </div>
                <div className = {styles.value}>
                    نظر تخصصی........
                </div>
            </li>
            <li className = {styles.item}>
                <div className = {styles.header}>
                    <span>قدرت پردازش</span>
                    <div className = {styles.rating}>
                        <Rating />
                        <span>(۴.۵)</span>
                    </div>
                </div>
                <div className = {styles.value}>
                    نظر تخصصی........
                </div>
            </li>
        </ul>
    );
};

export default Body;