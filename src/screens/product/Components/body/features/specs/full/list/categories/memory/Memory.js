import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../item/Item';
import Capacities from './capacities/Capacities';
import { product } from '../../../../../../../../data';



const Memory = () => {
    // const { product: { specs: { memory } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.category}>
            <span className = {styles.title}>حافظه‌ها</span>
            <ul className = {styles.items}>
                <Item title = 'ظرفیت RAM'>
                    <span id = {styles.resolution}>{product.specs.memory.ram}</span>
                </Item>
                <Item title = 'مدل RAM'>
                    <span id = {styles.resolution}>{product.specs.memory.ramModel}</span>
                </Item>
                <Item title = 'کش (Cache)'>
                    <span id = {styles.resolution}>{product.specs.memory.cache}</span>
                </Item>
                <Item title = 'نوع حافظه‌ی داخلی'>
                    <span id = {styles.resolution}>{product.specs.memory.capacityModel}</span>
                </Item>
                <Item title = 'مشخصات حافظه‌ی داخلی'>
                    <span id = {styles.resolution}>{product.specs.memory.capacitySpecs}</span>
                </Item>
                
                <Item title = 'ظرفیت‌های حافظه‌ی داخلی'>
                    <Capacities capacities = {product.specs.memory.capacities} />
                </Item>

            </ul>
        </div>
    );
};

export default Memory;