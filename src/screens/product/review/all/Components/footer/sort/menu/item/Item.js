import React, { useContext } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../../../../All';


const Item = ({ title, up, down }) => {
    const { queryData, setQueryData } = useContext(QueryDataContext)
    return (
        <li className={styles.item}>
            <span className={styles.title}>{title}</span>
            <div className={styles.actions}>
                <button onClick={() => setQueryData({ 
                    ...queryData,    
                    sort: up 
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width= '22' height= '22' fill="#00d166" className = "bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                </button>
                <button onClick={() => setQueryData({ 
                    ...queryData, 
                    sort: down 
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width= '22' height= '22' fill="#ff5555" className = "bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                    </svg>
                </button>
            </div>
        </li>
    );
};

export default Item;