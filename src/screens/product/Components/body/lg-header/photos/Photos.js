import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination }  from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import { product } from '../../../../data';



const Photos = () => {
    const [selectedColor, setSelectedColor] = useState(0);
    // const { product } = useSelector(state => state.productDetails);
    let photos = [];
    const showSelectedPhotos = (i) => {
        photos = product.photos && product.photos[i].list;
    };
    showSelectedPhotos(selectedColor);
    return (
        <div className={styles.container}>
            <Swiper
            className = {styles.list}
            slidesPerView={'auto'}
            spaceBetween = {20}
            pagination = {{ clickable: true }}
            modules = {[Pagination]}
            centeredSlides = {true}
            >
                {photos?.map(photo => 
                <SwiperSlide id = {styles.slide}>
                    <img src = {photo} />
                </SwiperSlide>
                )}
            </Swiper>
            <div className = {styles.colors}>
                {product.colors && product.colors.map((item, index) => (
                    <li className={styles.item}
                    id = {index === selectedColor ? styles.selected_item : ''}
                    >
                        <button className = {styles.color_btn} 
                        style = {{ backgroundColor: item.code }} 
                        onClick = {() => setSelectedColor(index)}>
                        </button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Photos;