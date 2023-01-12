import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Header = () => {
    const openCategories = () => {};
    return (
        <header className = {styles.header}>
            <div>
                <button className = {styles.cats_btn} onClick = {openCategories}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                    <span>لپتاپ‌ها</span>
                </button>               
            </div>
            <div></div>
            <div></div>
        </header>
    );
};

export default Header;