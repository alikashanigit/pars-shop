import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../../item/Item';


const Gpu = () => {
    const { product: { specs: { processor: { gpu } } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.sub_category}>
            <span className = {styles.title}>‌پردازنده گرافیکی</span>
            <ul className = {styles.items}>
                <Item title = 'سازنده‌ی پردازنده‌'>
                    <span className = {styles.value}>{gpu.manufacturer}</span>
                </Item>
                <Item title = 'سری پردازنده‌'>
                    <span className = {styles.value}>{gpu.family}</span>
                </Item>
                <Item title = 'مدل پردازنده‌'>
                    <span className = {styles.value}>{gpu.model}</span>
                </Item>
                <Item title = 'ظرفیت کش (Cache) پردازنده‌'>
                    <span className = {styles.value}>{gpu.cache}</span>
                </Item>
                <Item title = 'محدوده فرکانس پردازنده‌'>
                    <span className = {styles.value}>{gpu.frequency}</span>
                </Item>
            </ul>
        </div>
    );
};

export default Gpu;