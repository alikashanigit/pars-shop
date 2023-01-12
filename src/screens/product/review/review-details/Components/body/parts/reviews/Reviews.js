import React, { useState } from 'react';
import styles from './styles.module.css';
import List from './list/List';
import Add from './toggles/add/Add';
import Reply from './toggles/reply/ReplyReview';


const Reviews = ({ toggle }) => {

    const [reviewsToggle, setReviewsToggle] = useState({
        add: false,
        reply: false,
        details: false,
        allReviews: false,
    });

    const openAllReviews = () => setReviewsToggle({ allReviews: true });
    
    return (
        toggle.reviews &&
        <>

        <section className = {styles.section}>

            <div className={styles.header}>
                <span>امتیاز و نظرات</span>
                <button onClick={openAllReviews}>تمام نظرات</button>        
            </div>

            <List setReviewsToggle = {setReviewsToggle} />

            <div>
                <button onClick={() => setReviewsToggle({ add: true })}>امتیاز دهید و نظرتان را ثبت کنید</button>
            </div>

        </section>

        <Add open={reviewsToggle.add} setReviewsToggle = {setReviewsToggle} />
        <Reply open = {reviewsToggle.reply} setReviewsToggle = {setReviewsToggle} />
        
        </>
        
    );
};

export default Reviews;