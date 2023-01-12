import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { product } from '../../../data';



const Colors = () => {
    
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {20}
        pagination = {{ clickable: true }}
        modules = {[Pagination]}
        centeredSlides = {true}
        >
            {product.colors.map(item => console.log(item))}
                {/* // <SwiperSlide id = {styles.slide}>
                //     <img src = {photo} />
                // </SwiperSlide> */}
        </Swiper>
    );
};

export default Colors;