import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Container from './container/Container';
import { Link } from 'react-router-dom';



const Search = ({ searchOpen, setSearchOpen }) => {
    return (
        <Backdrop id = {styles.backdrop} sx = {{ 
            color: '#fff', 
            
            zIndex: (theme) => theme.zIndex.drawer + 1 }} open = {searchOpen}>
            <Container />
            <div className = {styles.footer}>
                <button onClick={() => setSearchOpen(false)}>
                    لغو
                </button>
                <Link to = ''
                // to = 'search'
                >
                    <span>جستجوی پیشرفته</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '16'
                    height = '16' 
                    fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
            </div>
        </Backdrop>
    );
}

export default Search;