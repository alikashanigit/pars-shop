import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../../item/Item';
import { product } from '../../../../../../../../../data';


const CPU = () => {
    // const { product: { specs: { processor: { cpu } } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.sub_category}>
            <span className = {styles.title}>‌پردازنده مرکزی</span>
            <ul className = {styles.items}>
                <Item title = 'سازنده‌ی پردازنده‌'>
                    <span className = {styles.value}>{product.specs.processor.cpu.manufacturer}</span>
                </Item>
                <Item title = 'سری پردازنده‌'>
                    <span className = {styles.value}>{product.specs.processor.cpu.family}</span>
                </Item>
                <Item title = 'مدل پردازنده‌'>
                    <span className = {styles.value}>{product.specs.processor.cpu.model}</span>
                </Item>
                <Item title = 'ظرفیت کش (Cache) پردازنده‌'>
                    <span className = {styles.value}>{product.specs.processor.cpu.cache}</span>
                </Item>
                <Item title = 'محدوده فرکانس پردازنده‌'>
                    <span className = {styles.value}>{product.specs.processor.cpu.frequency}</span>
                </Item>
            </ul>
        </div>
    );
};

export default CPU;