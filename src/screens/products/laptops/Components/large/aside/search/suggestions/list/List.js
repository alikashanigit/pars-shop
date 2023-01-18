import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from './data';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";
import { getForYouProductList }  from '../../../../../../../../../redux/products/actions';
import Item from './item/Item';



const List = () => {
    const dispatch = useDispatch();
    // const { products } = useSelector(state => state.productListForYou);
    useEffect(() => {
        dispatch(getForYouProductList());
    }, []);
    return (
        <Swiper
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