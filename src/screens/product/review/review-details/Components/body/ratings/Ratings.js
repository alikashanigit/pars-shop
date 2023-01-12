import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { ToggleContext } from '../../../Product';
import Rating from './rating/Rating';



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