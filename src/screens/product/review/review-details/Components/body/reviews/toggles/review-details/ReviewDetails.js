import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import List from './list/List';


const ReviewDetails = ({ open, setReviewsToggle }) => {
    const closeHandler = () => setReviewsToggle({ reviewDetails: false });
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <div className={styles.header}>
                    <div>
                        <span>جزییات</span>
                        
                    </div>
                    <button onClick = {closeHandler}>
                        X
                    </button>
                </div>
                <List />
            </div>
        </Backdrop>
    );
};

export default ReviewDetails;