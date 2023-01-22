import React, { useContext } from 'react';
import styles from './styles.module.css';
import List from './list/List';
import { QueryDataContext } from '../../../../../Laptops';
import { useSelector } from 'react-redux';

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
    const { searchHistoryInfo } = useSelector(state => state.userLogin);
    
    return (
        !queryData.keyword && searchHistoryInfo.length > 0 &&
        <div className = {styles.recently}>
            <div className={styles.header}>
                <span>جستجوهای اخیر شما</span>
                <button>حذف تاریخچه‌</button>
            </div>
            <ul className = {styles.list}>
                {searchHistoryInfo.map(item => (
                <li className = {styles.item}>
                    <button onClick={() => setQueryData({ ...queryData, keyword: item })}>{item}</button>
                </li>
                ))}
                
            </ul>
        </div>
    );
};

export default Recently;