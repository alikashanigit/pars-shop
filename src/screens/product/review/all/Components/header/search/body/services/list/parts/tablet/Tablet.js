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
            data-bs-target = '#landing_menu_categories_tablet' 
            aria-expanded = 'false' 
            aria-controls = 'landing_menu_categories_tablet'
            >
                <span>تبلت</span>
                <span id = {collapse ? styles.set_rotate : ''}><DownArrowIcon/></span> 
            </button>

            <div className = {`${styles.collapse} collapse`} id = 'landing_menu_categories_tablet'>
                <div className = {styles.body}>
                    <Link to = 'products/tablet'>
                        <span>تمام تبلت‌ها</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/tablet'>
                        <span>جدید‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/tablet'>
                        <span>محبوب‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/tablet'>
                        <span>بهترین‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/tablet'>
                        <span>اقتصادی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/tablet/?sort=اقتصادی">
                        <span>گیمینگ</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/tablet'>
                        <span>برنامه‌نویسی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                </div>
            </div>
            
        </li>
    );
};

export default Item;