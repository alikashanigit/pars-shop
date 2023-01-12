import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../item/Item';
import Others from './others/Others';
import Sizes from './sizes/Sizes';


const Display = () => {
    const { product: { specs: { display } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.category}>
            <span className = {styles.title}>نمایشگر</span>
            <ul className = {styles.items}>
                <Item title = 'ابعاد'>
                    <Sizes sizes = {display.sizes} />
                </Item>
                <Item title = 'وضوح تصویر (Resolution)'>
                    <span id = {styles.resolution}>{display.resolution}</span>
                </Item>
                <Item title = 'نوع نمایشگر'>
                    <span id = {styles.panelType}>{display.panelType}</span>
                </Item>
                <Item title = 'صفحه‌ی لمسی'>
                    <span id = {styles.panelType}>{display.touchscreen === 'true' ? 'دارد' : 'ندارد'}</span>
                </Item>
                <Item title = 'امکانات دیگر نمایشگر'>
                    <Others display = {display} />
                </Item>
            </ul>
        </div>
    );
};

export default Display;