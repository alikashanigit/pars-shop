import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation }  from 'swiper';
import "swiper/css/navigation";
import Item from './item/Item';



const Items = ({ items }) => {
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {5}
        navigation = {{ clickable: true }}
        modules = {[Navigation]}
        >
            {items.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item = {item} />
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Items;