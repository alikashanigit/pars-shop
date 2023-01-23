import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from './item/Item';
import { data } from './data';
import { Backdrop, CircularProgress } from '@mui/material';
import { products } from '../../large/body/list/data';


const List = () => {
    // const { loading, products } = useSelector(state => state.productList);
    return (
        <>
        {/* <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop> */}
        <ul className = {styles.list}>
            {products?.map(item => <Item item = {item} />)}
        </ul>
        </>
        
        
    );
};

export default List;