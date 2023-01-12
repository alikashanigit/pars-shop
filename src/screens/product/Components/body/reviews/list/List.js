import React from 'react';
import styles from './styles.module.css';
import './swiper.css';
import { useSelector } from 'react-redux';
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
        likes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        dislikes: [, 'r', 'a', 's'],
        replies: [],
    },
    {
        _id: 2,
        rating: 4.5,
        comment: 'دیدگاه...',
        suggestion: true,
        likes: ['a', 'a', 's'],
        dislikes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        replies: ['r', 'a', 's'],
    },
    {
        _id: 3,
        rating: 3.5,
        comment: 'دیدگاه...',
        suggestion: false,
        likes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        dislikes: ['c', 'd', 'r', 'a', 's'],
        replies: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
    },
]
const List = () => {
    // const { loading, success, error, reviews } = useSelector(state => state.productReviewList);
    return (
        <Swiper className = '' id = {styles.list}
        pagination = {{ clickable: true }}
        modules = {[ Pagination ]}
        spaceBetween = {10}
        slidesPerView = {'auto'}
        >
            {reviews?.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item = {item} />
            </SwiperSlide>
            ))}    
        </Swiper>
    );
};

export default List;