import React from 'react';
import styles from './styles.module.css';
import Laptop from './parts/laptop/Laptop';
import Mobile from './parts/mobile/Mobile';
import Accessories from './parts/accessories/Accessories';
import Tablet from './parts/tablet/Tablet';
import Arcade from './parts/arcade/Arcade';
import { Link } from 'react-router-dom';


const List = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to = 'products/top-discounts'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" height="30" fill="#0288e0" class="bi bi-journal-text" viewBox="0 0 16 16">
                    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                    </svg>
                    <span>مقاله‌</span>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to = 'products/top-sales'>
                    <div>
                        <img src = 'https://res.cloudinary.com/phase-1/image/upload/v1671953010/tech-shop/png/News-newspaper-magazine-icon-EPS10-by-Kanggraphic_mblzjp.png'/>
                    </div>
                    <span>خبر</span>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to = 'products/most-popular'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" height="30" fill="#ff4747" class="bi bi-play-btn-fill" viewBox="0 0 16 16">
                    <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                    </svg>
                    <span>مدیا</span>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to = 'products/newest'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="30" height="30" fill="#00d166" class="bi bi-award" viewBox="0 0 16 16">
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                    <span>کوییز</span>
                </Link>
            </li>
        </ul>      
    );
};

export default List;