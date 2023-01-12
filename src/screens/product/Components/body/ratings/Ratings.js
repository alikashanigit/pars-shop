import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { ToggleContext } from '../../../Product';
import Rating from './rating/Rating';
import { Link } from 'react-router-dom';



const Ratings = () => {  
    const dispatch = useDispatch();
    const [isCustomer, setIsCustomer] = useState(false);
    const { toggle, setToggle } = useContext(ToggleContext);
    const openAllReviewsByUsers = () => setIsCustomer(false);
    const openAllReviewsByCustomers = () => setIsCustomer(true);
    // Fetch All-Reviews:
    useEffect(() => {
        // dispatch(getAllReviews(isCustomer))
    }, [isCustomer])
    const getAllReviewsHandler = () => {

    };
    return (
        <div className = {styles.ratings}>
            <Link to = "reviews/?userType='خریدار'" className = {styles.item}>
                <div>
                    <div className = {styles.header}>
                        <span>(15)</span>
                        <span>خریدار</span>
                    </div>
                    <Rating value = {4.5} />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '16' height = '16' fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </Link>
            <Link to = "reviews/?userType='کاربر'" className = {styles.item}>
                <div>
                    <div className = {styles.header}>
                        <span>(4)</span>
                        <span>کاربر</span>
                    </div>
                    <Rating value = {4} />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '16' height = '16' fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </Link>
        </div>
    );
};

export default Ratings;