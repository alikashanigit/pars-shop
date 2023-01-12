import React, { useState } from 'react';
import styles from './styles.module.css';
import { Pagination } from '@mui/material';
import List from './list/List';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Paginate from './paginate/Paginate'; 


const Body = () => {
    const { page, pages } = useSelector(state => state.productList);
    return (
        <div className = {styles.body}>
            <List />
            <Paginate page = {page} pages = {pages} />
        </div>
    );
};

export default Body;