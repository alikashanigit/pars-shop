import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { ToggleContext } from '../../../Product';
import List from './list/List';
import Reply from './toggles/reply/ReplyReview';
import QuickView from './toggles/quick-view/QuickView';


const Reviews = () => { 
    const {toggle, setToggle} = useContext(ToggleContext);
    return (
        <>       
        <section className = {styles.section}>

            <div className = {styles.header}>
                <span>امتیاز و نظرات</span>
                <Link to = 'reviews'>
                    <span>تمام نظرات</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '14' height = '14' 
                    fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
            </div>

            <List setToggle = {setToggle} />

            <div className = {styles.add_review}>
                <Link to = 'add-review'>
                    <span>امتیاز دهی و ثبت نظر</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '16' height = '16' 
                    fill = '#44b3fd' class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
            </div>

        </section>

        <Reply open = {toggle.replyComment} setToggle = {setToggle} />     
        <QuickView open = {toggle.reviewQuickView} setToggle = {setToggle} />     
        </>
        
    );
};

export default Reviews;