import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { DataContext}  from '../../Shop';
import { product } from '../../data';



const Colors = () => {
    const { data, setData } = useContext(DataContext);
    const [selectedColor, setSelectedColor] = useState(0);
    // const { product } = useSelector(state => state.productDetails);
    let photos = [];
    // useEffect(() => {
    //     setData({
    //         ...data,
    //         color: product.colors && product.colors[0] && product.colors[0].name,
    //     })
    // }, []);
    const showSelectedPhotos = (i) => {
        photos = product.photos && product.photos[i].list;
    };
    showSelectedPhotos(selectedColor);
    
    const selectColorHandler = (name, index) => {
        setSelectedColor(index);
        setData({
            ...data,
            color: name,
        })
    }

    return (
        <div className={styles.container}>
            <span className={styles.title}>رنگ مورد علاقتو انتخاب کن</span>
            <div className = {styles.colors}>
                {product.colors && product.colors.map((item, index) => (
                <li className = {styles.item} id = {index === selectedColor ? styles.selected_item : ''}>
                    <button className = {styles.color_btn} 
                    style = {{ backgroundColor: item.code }} 
                    onClick = {() => selectColorHandler(item.name, index)}>
                    </button>
                </li>
                ))}
            </div>
        </div>
    );
};

export default Colors;