import React, { useContext } from 'react';
import styles from './styles.module.css';
import { FiltersContext } from '../../Filters';


const Button = ({ title, id, partTitle, partList }) => {
    const { filterHandler } = useContext(FiltersContext);
    return (
        <button className = {styles.btn}
        type = 'button' 
        data-bs-toggle = 'collapse' 
        data-bs-target = {`#landing_menu_categories_${id}`} 
        aria-expanded = 'false' 
        aria-controls ={`landing_menu_categories_${id}`}
        >
            <div>
                <span className = {styles.title}>{title}</span>    
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
            <div>
                {partList?.map(item => (
                <button onClick={() => filterHandler(partTitle, item)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>{item}</span>
                </button>
                ))}
            </div>
        </button>
    );
};

export default Button;