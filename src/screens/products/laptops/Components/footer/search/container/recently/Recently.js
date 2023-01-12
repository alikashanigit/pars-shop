import React, { useContext } from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { QueryDataContext } from '../../../../../Laptops';

const historySearch = [
    'surface',
    'mac',
    'ایسوس',
    'iPhone 13',
    'controller',
    'headset سونی',
    'پلی استیشن ۵',

]
const Recently = () => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    return (
        !queryData.keyword && 
        <div className = {styles.recently}>
            <div className={styles.header}>
                <span>جستجوهای اخیر شما</span>
                <button>حذف تاریخچه‌</button>
            </div>
            <ul className = {styles.list}>
                {historySearch.map(item => (
                <li className = {styles.item}>
                    <button onClick={() => setQueryData({ ...queryData, keyword: item })}>{item}</button>
                </li>
                ))}
                
            </ul>
        </div>
    );
};

export default Recently;