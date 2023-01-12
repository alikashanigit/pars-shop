import React, { useContext, useState } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Product';
import List from './list/List';
import Add from './toggles/add/Add';
import Reply from './toggles/reply/ReplyReview';
import FullList from './toggles/full-list/FullList';
import ReviewDetails from './toggles/review-details/ReviewDetails';
import ReportReview from './toggles/report/ReportReview';


const Reviews = () => {

    const { toggle, setToggle } = useContext(ToggleContext);
    
    const [reviewsToggle, setReviewsToggle] = useState({
        add: false,
        reply: false,
        details: false,
        allReviews: false,
        reviewDetails: false,
        report: false,
    });

    const openAllReviews = () => setToggle({ ...toggle, reviews: { all: true } });
    
    const openAddReview = () => setToggle({ ...toggle, reviews: { add: true } });

    return (
        <>
        
        <section className = {styles.section}>

            <div className = {styles.header}>
                <span>امتیاز و نظرات</span>
                <button onClick={openAllReviews}>تمام نظرات</button>        
            </div>

            <List setReviewsToggle = {setReviewsToggle} />

            <div className = {styles.add_review}>
                <button onClick={openAddReview}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" fill="orangered" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                    </svg>
                    <span>امتیاز دهید و نظرتان را ثبت کنید</span>
                </button>
            </div>

        </section>

        <Add open = {reviewsToggle.add} setReviewsToggle = {setReviewsToggle} />
        <Reply open = {reviewsToggle.reply} setReviewsToggle = {setReviewsToggle} />     
        <FullList open = {reviewsToggle.allReviews} setReviewsToggle = {setReviewsToggle} />     
        <ReviewDetails open = {reviewsToggle.reviewDetails} setReviewsToggle = {setReviewsToggle} />     
        <ReportReview open = {reviewsToggle.report} setReviewsToggle = {setReviewsToggle} />     
        </>
        
    );
};

export default Reviews;