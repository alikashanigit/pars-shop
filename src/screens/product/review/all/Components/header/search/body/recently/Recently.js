import React from 'react';
import styles from './styles.module.css';
import List from './list/List';


const Recently = ({ keyword }) => {
    return (
        !keyword && 
        <div className = {styles.recently}>
            <div className={styles.header}>
                <span>جستجوهای اخیر شما</span>
                <button>حذف تاریخچه‌</button>
            </div>
            <ul className = {styles.list}>
                <li className = {styles.item}>
                    <button>iPhone 13</button>
                </li>
                <li className = {styles.item}>
                    <button>controller</button>
                </li>
                <li className = {styles.item}>
                    <button>headset</button>
                </li>
                <li className = {styles.item}>
                    <button>galaxy</button>
                </li>
                <li className = {styles.item}>
                    <button>laptop</button>
                </li>
            </ul>
        </div>
    );
};

export default Recently;