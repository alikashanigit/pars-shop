import React from 'react';
import styles from './styles.module.css';
import Item from '../item/Item';
import { useSelector } from 'react-redux';
import Classification from './classification/Classification';


const Other = () => {
    const { product: { specs } } = useSelector(state => state.productDetails);

    return (
        <div className = {styles.category}>
            <span className={styles.title}>دیگر امکانات</span>
            <ul className = {styles.items}>

                <Item title = 'سیستم‌عامل‌'>
                    {/* <span className = {styles.value}>{specs.os}</span> */}
                </Item>

                <Item title = 'کلاس‌بندی'>
                    <Classification classification = {specs.classification && specs.classification} />
                </Item>
            
            </ul>
        </div>
    );
};

export default Other;