import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";
import { QueryDataContext }  from '../../../Laptops';
import Item from './item/Item';
import { getAccessoriesList } from '../../../../../../redux/products/actions';


const List = () => {
    const dispatch = useDispatch();
    const { queryData } = useContext(QueryDataContext)
    const { loading, products } = useSelector(state => state.productAccessoriesList);
    // const { loading, products } = useSelector(state => state.productList);
    useEffect(() => {
        dispatch(getAccessoriesList(queryData, 'لپتاپ'));
    }, []);
    return (
        <Swiper id = {styles.list}
        className = {styles.list}
        slidesPerView={'auto'}
        spaceBetween = {20}
        pagination = {{ clickable: true }}
        modules = {[Pagination]}
        >
            {!products && <span>محصولی وجود ندارد</span>}
            {products?.map(item => (
            <SwiperSlide id = {styles.slide}>
                <Item item = {item} />
            </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default List;