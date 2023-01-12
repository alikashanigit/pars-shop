import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';



const Item = ({ item }) => {
    const dispatch = useDispatch();
    const removeHandler = (id) => {
        dispatch({
            type: 'PRODUCT_COMPARE_REMOVE',
            payload: id
        });
    };
    return (
        <li key = {item.name} className={styles.item}>
            <img alt = {item.name} src = {item.cover}/>         
            <span>{item.name}</span>
            <button onClick={() => removeHandler(item)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                
            </button>
        </li>
    );
};

export default Item;