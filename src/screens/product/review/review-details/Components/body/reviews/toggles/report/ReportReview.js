import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { Backdrop } from '@mui/material';
import Header from './header/Header';
import Body from './body/Body';



const ReportReview = ({ open, setReviewsToggle }) => {
    return (
        <Backdrop id ={styles.backdrop} open = {open}>
            <div className={styles.report}>

                <Header setReviewsToggle = {setReviewsToggle} /> 
                    
                <Body />

            </div>
        </Backdrop>
    );
};

export default ReportReview;