import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';


const ReplyDetails = ({ open, setToggle }) => {
    // const currentReview = reviews && reviews.find(i => i._id === item._id);
    const review = {
        replies: [
            {
                comment: 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن. اگر بخوای از این نرم افزار ها استفاده کنی باید ویندوز بریزی روی مکت که پیشنهاد نمیشه. (نرم افزار های اختصاصی مک هستن که کارای نرم افزار هایی که نامبردم رو میکنن اما کیفیت و جامعه کسایی که ازشون تو ایران استفاده میکنن تقریبا صفره)',
            }
        ]
    }
    const comment = 'متاسفانه خیلی از نرم‌افزار های مهندسی مکانیک مثل Ansys CATIA SolidWorks و NX فقط برای ویندوز هست و برای مک ارائه نشدن. اگر بخوای از این نرم افزار ها استفاده کنی باید ویندوز بریزی روی مکت که پیشنهاد نمیشه. (نرم افزار های اختصاصی مک هستن که کارای نرم افزار هایی که نامبردم رو میکنن اما کیفیت و جامعه کسایی که ازشون تو ایران استفاده میکنن تقریبا صفره)',
    return (
        <Backdrop id ={styles.backdrop} open = {open}>
            <div className={styles.reply_details}>

                {comment} 

            </div>
        </Backdrop>
    );
};

export default ReplyDetails;