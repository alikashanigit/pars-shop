import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import Container from './container/Container';



const Filters = ({ filtersOpen, setFiltersOpen }) => {
    return (
        <Backdrop sx = {{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open = {filtersOpen}>
            <Container />
            <div className = {styles.footer}>
                <button onClick={() => setFiltersOpen(false)}>
                    X
                </button>
            </div>
        </Backdrop>
    );
}

export default Filters;