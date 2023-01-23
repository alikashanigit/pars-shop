import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css/pagination";
import { products } from './data';
import Item from './item/Item';
import { getOrderItemsSimilarList } from '../../../../../../../../../redux/user/orders/actions';


const List = () => {
    const { id } = useParams();
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
        category: 'لوازم جانبی',
        // ....???
    })
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderItemsSimilarList(id));
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