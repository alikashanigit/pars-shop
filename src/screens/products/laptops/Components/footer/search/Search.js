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
            </div>
        </Backdrop>
    );
}

export default Search;