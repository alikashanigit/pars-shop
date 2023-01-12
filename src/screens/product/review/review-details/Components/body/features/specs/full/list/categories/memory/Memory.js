import React, { memo } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../item/Item';
import Capacities from './capacities/Capacities';



const Memory = () => {
    const { product: { specs: { memory } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.category}>
            <span className = {styles.title}>حافظه‌ها</span>
            <ul className = {styles.items}>
                <Item title = 'ظرفیت RAM'>
                    <span id = {styles.resolution}>{memory.ram}</span>
                </Item>
                <Item title = 'مدل RAM'>
                    <span id = {styles.resolution}>{memory.ramModel}</span>
                </Item>
                <Item title = 'کش (Cache)'>
                    <span id = {styles.resolution}>{memory.cache}</span>
                </Item>
                <Item title = 'نوع حافظه‌ی داخلی'>
                    <span id = {styles.resolution}>{memory.capacityModel}</span>
                </Item>
                <Item title = 'مشخصات حافظه‌ی داخلی'>
                    <span id = {styles.resolution}>{memory.capacitySpecs}</span>
                </Item>
                
                <Item title = 'ظرفیت‌های حافظه‌ی داخلی'>
                    <Capacities capacities = {memory.capacities} />
                </Item>

            </ul>
        </div>
    );
};

export default Memory;