import React, { useState } from 'react';
import styles from './styles.module.css';
import Sort from './sort/Sort';
import Filters from './filters/Filters';
import Search from './search/Search';



const Footer = () => {
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <>
        <footer className = {styles.footer}>
            
            <div>
                <button onClick = {() => setSearchOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '21'
                    height = '21'
                    fill = '#333'
                    className = "bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
            </div>
            
            <Sort />

            <div>
                <button onClick = {() => setFiltersOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" fill="#333" className = "bi bi-sliders" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                    </svg>
                </button>
            </div>

        </footer>
        <Filters filtersOpen={filtersOpen} setFiltersOpen = {setFiltersOpen} />
        <Search searchOpen={searchOpen} setSearchOpen = {setSearchOpen} />
        </>
    );
};

export default Footer;