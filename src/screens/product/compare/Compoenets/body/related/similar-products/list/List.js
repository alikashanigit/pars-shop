import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";
import { products } from './data';
import Item from './item/Item';



const List = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const { loading, products } = useSelector(state => state.productRelatedAccessoriesList)
    useEffect(() => {

    }, []);
    return (
        <Swiper id = 'swiper_arrows_bottom_center'
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {20}
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