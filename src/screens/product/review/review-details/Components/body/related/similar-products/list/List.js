import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";
import { products } from './data';
import Item from './item/Item';



const List = () => {
    return (
        <Swiper id = 'swiper_arrows_bottom_center'
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {10}
        pagination = {{ clickable: true }}
        modules = {[Pagination]}
        >
            {products.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item = {item} />
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default List;