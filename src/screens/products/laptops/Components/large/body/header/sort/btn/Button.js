import React, { useContext } from 'react';
import { QueryDataContext } from '../../../../../../Laptops';
import styles from './styles.module.css';


const Button = () => {
    const { queryData } = useContext(QueryDataContext)
    return (
        <button className = {styles.sort_btn} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                
            <div className={styles.icon}>
                {queryData.sort.includes('up') && 
                <svg xmlns="http://www.w3.org/2000/svg" 
                width= '18' height= '18' fill="#00d166" className = "bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                </svg>
                }
                {queryData.sort.includes('down') && 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ff5555" className = "bi bi-arrow-down" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                }
            </div>

            <span>
                {queryData.sort.includes('newest') && 'جدیدترین'}
                {queryData.sort.includes('sales') && 'پرفروش‌ترین'}  
                {queryData.sort.includes('popular') && 'محبوب‌ترین'}
                {queryData.sort.includes('price') && 'گران‌ترین'}
            </span>
            
        </button>
    );
};

export default Button;