import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import Item from './item/Item';



const List = () => {
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {15}
        >
            Products...
        </Swiper>
    );
};

export default List;