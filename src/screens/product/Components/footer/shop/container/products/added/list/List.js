import React from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import Item from './item/Item';
import { useSelector } from 'react-redux';



const List = () => {
    const { products } = useSelector(state => state.productCompare);
    return (
        <Swiper
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {15}
        >
            {products?.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item = {item} />
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default List;