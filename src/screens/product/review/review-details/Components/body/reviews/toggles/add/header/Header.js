import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';



const Header = ({ toggle, setToggle }) => {
    const closeHandler = () => setToggle({ ...toggle, reviews: { add: false }});
    return (
        <div className={styles.header}>
            

            <button onClick={closeHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
            </button>

            <Link className = {styles.ars_link} to = 'add-detailed-review'>

                <span>امتیازدهی پیشرفته</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>

            </Link>
            
        </div>
    );
};

export default Header;