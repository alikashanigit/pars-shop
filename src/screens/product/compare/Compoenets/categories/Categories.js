import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Categories = () => {
    const openFeaturedHandler = () => {};
    const openCategoriesHandler = () => {};
    const openSavedProductsHandler = () => {};
    return (
        <ul className = {styles.categories}>

            <li>
                <Link to = 'filters'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width = '16' height = '16' fill = '#0288e8' className = "bi bi-sliders" viewBox="0 0 16 16">
                        <path fillRule = "evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                        </svg>
                    </div>
                    <span>نوت‌بوک</span>
                </Link>
            </li>

            <li>
                <Link to = 'search'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width = '16' height = '16' fill = '#0288e8' className ="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </div>
                    <span>نت‌بوک</span>
                </Link>
            </li>

            <li>
                <button onClick = {openSavedProductsHandler}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0288e8" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z"/>
                        <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z"/>
                        </svg>
                    </div>
                    <span>الترابوک</span>
                </button>
            </li>

            <li>
                <button onClick = {openFeaturedHandler}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="#0288e8" className="bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                    </div>
                    <span>مک‌بوک</span>
                </button>
            </li>

            <li>
                <button onClick = {openCategoriesHandler}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width = '20' height = '20' fill = '#0288e8' className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <span>سرفیس</span>
                </button>
            </li>
            
            <li>
                <button onClick = {openCategoriesHandler}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width = '20' height = '20' fill = '#0288e8' className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <span>سرفیس</span>
                </button>
            </li>

        </ul>
    );
};

export default Categories;