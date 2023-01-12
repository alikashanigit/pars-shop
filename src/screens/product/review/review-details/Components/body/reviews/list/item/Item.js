import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Comment from './comment/Comment';
import Reactions from './reactions/Reactions';
import { useSelector } from 'react-redux';
import { reviews } from '../List';


const Item = ({ setReviewsToggle, item }) => {
    // const { reviews } = useSelector(state => state.productReviewList);
    const currentReview = reviews && reviews.find(i => i._id === item._id);
    return (
        <div key = {item._id} className={styles.item}>
        
            <button onClick = {() => setReviewsToggle({ reviewDetails: true })}>
                
                <Header currentReview = {currentReview} />

                <Comment currentReview = {currentReview.comment} />

            </button>

            <Reactions reviewId = {currentReview._id} setReviewsToggle = {setReviewsToggle} />
        
        </div>
    );
};

export default Item;