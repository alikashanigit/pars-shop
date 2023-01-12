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
            data-bs-target = '#landing_menu_categories_arcade' 
            aria-expanded = 'false' 
            aria-controls = 'landing_menu_categories_arcade'
            >
                <span>بازی</span>
                <span id = {collapse ? styles.set_rotate : ''}><DownArrowIcon/></span> 
            </button>

            <div className = {`${styles.collapse} collapse`} id = 'landing_menu_categories_arcade'>
                <div className = {styles.body}>
                    <Link to = 'products/arcade'>
                        <span>تمام بازی‌ها</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/arcade'>
                        <span>جدید‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/arcade'>
                        <span>محبوب‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/arcade'>
                        <span>بهترین‌ترین‌</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/arcade'>
                        <span>اقتصادی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = "products/arcade/?sort=اقتصادی">
                        <span>گیمینگ</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                    <Link to = 'products/arcade'>
                        <span>برنامه‌نویسی</span>
                        <LeftArrowIcon color = '#0288e0' width = '17' height = '17' />
                    </Link>
                </div>
            </div>
            
        </li>
    );
};

export default Item;