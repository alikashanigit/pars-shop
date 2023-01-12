import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { DownArrowIcon, LeftArrowIcon } from '../../../../../../../../../../../icons';


const Item = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <li className = {styles.item}>

            <button className = {styles.btn}
            onClick = {() => setCollapse(!collapse)}
            type = 'button' 
            data-bs-toggle = 'collapse' 
            data-bs-target = '#landing_menu_categories_accessories' 
            aria-expanded = 'false' 
            aria-controls = 'landing_menu_categories_accessories'
            >
                <span>لوازم جانبی</span>
                <span id = {collapse ? styles.set_rotate : ''}><DownArrowIcon/></span> 
            </button>

            <div className = {`${styles.collapse} collapse`} id = 'landing_menu_categories_accessories'>
                <div className = {styles.body}>
                    <Link to = 'products/accessories'>
                        <span>تمام لوازم جانبی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/accessories'>
                        <span>لپتاپ</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/accessories/mobile'>
                        <span>موبایل</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/accessories/tablet'>
                        <span>تبلت</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/accessories/arcade'>
                        <span>بازی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort='newest'">
                        <span>جدیدترین</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort=most-popular">
                        <span>محبوب‌ترین</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort=top-sales">
                        <span>پرفروش‌ترین</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort=highest-price">
                        <span>گران‌ترین</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort=fin">
                        <span>اقتصادی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories/?sort=gaming">
                        <span>گیمینگ</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/accessories?sort='programming'">
                        <span>برنامه‌نویسی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                </div>
            </div>
            
        </li>
    );
};

export default Item;