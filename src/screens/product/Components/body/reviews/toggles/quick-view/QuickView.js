import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Header from './header/Header';
import Body from './body/Body';
import { useSelector } from 'react-redux';
import Reactions from './reactions/Reactions';

const review = {
    _id: 1,
    rating: 4,
    user: {
        fullName: '',
    },
    comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن. اگر بخوای از این نرم افزار ها استفاده کنی باید ویندوز بریزی روی مکت که پیشنهاد نمیشه. (نرم افزار های اختصاصی مک هستن که کارای نرم افزار هایی که نامبردم رو میکنن اما کیفیت و جامعه کسایی که ازشون تو ایران استفاده میکنن تقریبا صفره)',
    suggestion: true,
    likes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
    dislikes: [, 'r', 'a', 's'],
    benefits: [, 'r', 'a', 's'],
    disadvantages: [, 'r', 'a', 's'],
};
const QuickView = ({ open, setToggle }) => {
    // const { loading, success, error, message, review } = useSelector(state => state.productReviewDetails);
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <Header review = {review} />
                <Body review = {review} />
                <Reactions review = {review} />
            </div>
        </Backdrop>
    );
};

export default QuickView;