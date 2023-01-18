import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";



const Times = ({ data, setData }) => {
    const selectDayHandler = (time) => {
        setData({
            ...data,
            time,
        });
    };
    return (
        <ul className = {styles.list}>
            <li>
                <button onClick={() => selectDayHandler('۹ الی ۱۲')}>
                    <span>۹</span>
                    <span>الی</span>
                    <span>۱۲</span>
                </button>
            </li>
            <li>
                <button onClick={() => selectDayHandler('۱۲ الی ۱۸')}>
                    <span>۱۲</span>
                    <span>الی</span>
                    <span>۱۸</span>
                </button>
            </li>
        </ul>
    );
};

export default Times;