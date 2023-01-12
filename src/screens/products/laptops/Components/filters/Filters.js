import React, { useEffect, useContext, useState } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../Laptops';


const Filters = () => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    let mixedParts = [
        ...queryData.brands || '',
        ...queryData.colors  || '',
    ]
    return (
        <ul className = {styles.filters}>
            {mixedParts?.map(item => (
            <li>
                <button className = {styles.btn}
                
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span className = {styles.name}>
                        {item}
                    </span>
                </button>
            </li>
            ))}

        </ul>
    );
};

export default Filters;