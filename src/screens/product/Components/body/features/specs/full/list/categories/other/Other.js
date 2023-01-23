import React from 'react';
import styles from './styles.module.css';
import Item from '../item/Item';
import { useSelector } from 'react-redux';
import Classification from './classification/Classification';
import { product } from '../../../../../../../../data';


const Other = () => {
    // const { product: { specs } } = useSelector(state => state.productDetails);

    return (
        <div className = {styles.category}>
            <span className={styles.title}>دیگر امکانات</span>
            <ul className = {styles.items}>

                <Item title = 'سیستم‌عامل‌'>
                    {/* <span className = {styles.value}>{product.specs.os}</span> */}
                </Item>

                <Item title = 'کلاس‌بندی'>
                    <Classification classification = {product.specs.classification && product.specs.classification} />
                </Item>
            
            </ul>
        </div>
    );
};

export default Other;