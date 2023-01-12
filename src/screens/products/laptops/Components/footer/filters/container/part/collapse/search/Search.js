import React, { useContext } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../../../../../../Laptops';


const Search = ({ title }) => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    return (
        <form className = {styles.search}>
            <label hidden htmlFor = ''>جستجوی {title}‌ها</label>
            <input id = ''
            type = 'text'
            placeholder = {`جستجوی ${title}‌ها`}
            value = {queryData.keyword}
            onChange = {(e) => setQueryData({ keyword: e.target.value })}
            />
        </form>
    );
};

export default Search;