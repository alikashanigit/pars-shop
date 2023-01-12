import React from 'react';
import './swiper.css';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import Item from './item/Item';


const List = ({ setReviewsToggle }) => {
    return (
        <Swiper className = '' id = {styles.list}
        pagination = {{ clickable: true }}
        modules = {[ Pagination ]}
        spaceBetween = {10}
        slidesPerView = {'auto'}
        >
            <SwiperSlide id = {styles.slide}>
                <Item setReviewsToggle = {setReviewsToggle} />
            </SwiperSlide>
            <SwiperSlide id = {styles.slide}>
                <Item setReviewsToggle = {setReviewsToggle} />
            </SwiperSlide>
            <SwiperSlide id = {styles.slide}>
                <Item setReviewsToggle = {setReviewsToggle} />
            </SwiperSlide>
            <SwiperSlide id = {styles.slide}>
                <Item setReviewsToggle = {setReviewsToggle} />
            </SwiperSlide>
        </Swiper>
    );
};

export default List;