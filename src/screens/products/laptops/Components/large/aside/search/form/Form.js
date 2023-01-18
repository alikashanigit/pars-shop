import React, { useContext, useEffect, useRef, useState } from 'react';
import { QueryDataContext } from '../../../../../Laptops';
import styles from './styles.module.css';


const Form = () => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    const inputRef = useRef();
    return (
        <form className = {styles.form}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="15" height="15" fill="#777" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <label htmlFor = 'products_aside_search_form' hidden>جستجوی محصولات</label>
            <input ref = {inputRef} id = 'products_aside_search_form' 
            type = 'text' 
            placeholder = 'نام، برند، ... محصول'
            value = {queryData.keyword}
            onChange = {(e) => setQueryData({
                ...queryData,
                keyword: e.target.value
            })}
            />
            {queryData.keyword &&
            <button onClick = {() => setQueryData({
                ...queryData,
                keyword: ''
            })}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" fill="#fff" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            }
        </form>
    );
};

export default Form;