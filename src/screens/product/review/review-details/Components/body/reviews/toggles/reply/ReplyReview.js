import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { reviews } from '../../list/List';
import { Backdrop } from '@mui/material';
import Header from './header/Header';
import Reactions from './reactions/Reactions';
import Original from './original/Original';
import Form from './form/Form';



const Reply = ({ open, setReviewsToggle }) => {
    // const currentReview = reviews && reviews.find(i => i._id === item._id);
    const currentReview = {
        user: {
            fullName: 'احمد محمدی'
        },
        comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن. اگر بخوای از این نرم افزار ها استفاده کنی باید ویندوز بریزی روی مکت که پیشنهاد نمیشه. (نرم افزار های اختصاصی مک هستن که کارای نرم افزار هایی که نامبردم رو میکنن اما کیفیت و جامعه کسایی که ازشون تو ایران استفاده میکنن تقریبا صفره)',
        
    }
    return (
        <Backdrop id ={styles.backdrop} open = {open}>
            <div className={styles.reply}>

                <Header  setReviewsToggle = {setReviewsToggle} /> 
                
                <Original 
                comment = {currentReview.comment} 
                fullName = {currentReview.user.fullName} 
                />

                <Form />

                <Reactions /> 

            </div>
        </Backdrop>
    );
};

export default Reply;