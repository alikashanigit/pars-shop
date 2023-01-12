import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import List from './list/List';
import styles from './styles.module.css';


const Results = ({ keyword }) => {
    const { loading, products } = useSelector(state => state.productList);
    return (
        <div className = {styles.results} id = {keyword ? styles.show : ''}>
            <Backdrop
            sx = {{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open = {loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <div className={styles.header}>
                <span>نتایج</span>
                <span>({products && products.length} محصول)</span>
            </div>
            <List products = {products} />
        </div>
    );
};

export default Results;