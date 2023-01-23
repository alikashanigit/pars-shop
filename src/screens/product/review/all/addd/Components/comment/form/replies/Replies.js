import React, { useState } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import ReplyAllRoundedIcon from '@mui/icons-material/ReplyAllRounded';


const review = {
    likes: [1,2,3,4],
    dislikes: [1,4],
    replies: [
        {
            user: {
                fullName: 'مهتاب محبی',  
            },
            comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن.',
            likes: [1,2,3,4,5,6],
            dislikes: [1,2,3,4,5,6,4,5,67,7],
            
            createdAt: '۱۲ مهر ۱۴۰۱ - ۱۲:۳۴',
        },
        {
            user: {
                fullName: 'مهتاب محبی',  
            },
            comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن.',
            likes: [1,2,3,4,5,6],
            dislikes: [1,2,3,4,5,6,4,5,67,7],
            
            createdAt: '۱۲ مهر ۱۴۰۱ - ۱۲:۳۴',
        },
        {
            user: {
                fullName: 'مهتاب محبی',  
            },
            comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن.',
            likes: [1,2,3,4,5,6],
            dislikes: [1,2,3,4,5,6,4,5,67,7],
            
            createdAt: '۱۲ مهر ۱۴۰۱ - ۱۲:۳۴',
        },
        {
            user: {
                fullName: 'مهتاب محبی',  
            },
            comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن.',
            likes: [1,2,3,4,5,6],
            dislikes: [1,2,3,4,5,6,4,5,67,7],
            
            createdAt: '۱۲ مهر ۱۴۰۱ - ۱۲:۳۴',
        },
    ],
};
const Replies = ({ open, setRepliesOpen }) => {
    const closeHandler = () => setRepliesOpen(false);
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>
                        <span className={styles.replies_num}>۵۶</span> پاسخ به دیدگاه شما
                    </span>
                    <button onClick = {() => setRepliesOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <ul className={styles.list}>
                    {review.replies?.map(item => (
                    <li className={styles.item}>
                        <div className={styles.item_header}>
                            <span className={styles.user_name}>{item.user.fullName}</span>
                            <span className={styles.date}>{item.createdAt}</span>
                        </div>
                        <p>{item.comment}</p>
                        <div className={styles.details}>
                            <div>
                                <ThumbUpRoundedIcon style={{ fontSize: '1.2rem'}} />
                                <span>{review.likes.length}</span>
                            </div>
                            <div>
                                <ThumbDownAltRoundedIcon style={{ fontSize: '1.2rem'}} />
                                <span>{review.dislikes.length}</span>
                            </div>
                        </div>
                    </li>
                    ))}
                    
                </ul>
            </div>
        </Backdrop>
    );
};

export default Replies;