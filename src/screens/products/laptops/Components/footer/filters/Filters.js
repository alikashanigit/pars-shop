import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Container from './container/Container';



const Filters = ({ filtersOpen, setFiltersOpen }) => {
    return (
        <Backdrop id = {styles.backdrop} open = {filtersOpen}>
            <Container />
            <div className = {styles.footer}>
                <button onClick={() => setFiltersOpen(false)}>
                    لغو
                </button>
            </div>
        </Backdrop>
    );
}

export default Filters;