import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";


const days = [
    'شنبه',
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
];
const Days = ({ data, setData, onEdit }) => {
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {10}
        // pagination = {{ clickable: true }}
        // modules = {[Pagination]}
        >
            {days.map(day => (
            <SwiperSlide id = {styles.slide}>
                <button onClick = {() => onEdit(day)}>
                    {day}
                </button>
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Days;