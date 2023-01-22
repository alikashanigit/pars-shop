import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";



const List = () => {
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {20}
        pagination = {{ clickable: true }}
        modules = {[Pagination]}
        >
           
            <SwiperSlide id = {styles.slide}>
                <div className={styles.container}>
                    <img alt = '' src = '' />
                    <span>گیمینگ</span>
                </div>
            </SwiperSlide>
           
        </Swiper>
    );
};

export default List;