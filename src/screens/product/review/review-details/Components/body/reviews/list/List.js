import React from 'react';
import './swiper.css';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import Item from './item/Item';

export const reviews = [
    {
        _id: 1,
        rating: 4,
        comment: 'دیدگاه...',
        suggestion: true,
    },
    {
        _id: 2,
        rating: 4.5,
        comment: 'دیدگاه...',
        suggestion: true,
    },
    {
        _id: 3,
        rating: 3.5,
        comment: 'دیدگاه...',
        suggestion: false,
    },
]
const List = ({ setReviewsToggle }) => {
    return (
        <Swiper className = '' id = {styles.list}
        pagination = {{ clickable: true }}
        modules = {[ Pagination ]}
        spaceBetween = {10}
        slidesPerView = {'auto'}
        >
            {reviews?.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item={item} setReviewsToggle = {setReviewsToggle} />
            </SwiperSlide>
            ))}
            
          
        </Swiper>
    );
};

export default List;