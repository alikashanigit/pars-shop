import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css";
import "swiper/css/pagination";



const Photos = () => {
    const { product: { photos } } = useSelector(state => state.productDetails);

    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {20}
        pagination = {{ clickable: true }}
        modules = {[Pagination]}
        centeredSlides = {true}
        >
            {photos?.map(photo => 
            <SwiperSlide id = {styles.slide}>
                <img src = {photo} />
            </SwiperSlide>
            )}
        </Swiper>  
    );
};

export default Photos;