import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import List from './list/List';
import styles from './styles.module.css';


const Search = ({ queryData, open }) => {
    const { loading, products } = useSelector(state => state.productList);
    return (
        <Backdrop id = {styles.backdrop} open = {queryData.keyword}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>نتایج</span>
                    <span>({products && products.length} محصول)</span>
                </div>
                <List products = {products} />
            </div>
        </Backdrop>
    );
};

export default Search;