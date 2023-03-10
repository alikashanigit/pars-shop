import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import CurrentProduct from './current-product/CurrentProduct';
import SelectedProducts from './selected-products/SelectedProducts';
import SubHeader from './sub-header/SubHeader';


const List = ({ open, setOpen }) => {
    return (
        <Backdrop open = {open}>
            <div className={styles.list}>
                <div className={styles.header}>
                    <span>مقایسه‌ی محصولات</span>
                    <button onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <SubHeader />
                <ul className = {styles.items}>
                    <CurrentProduct />
                    <SelectedProducts />
                </ul>
            </div>
        </Backdrop>
    );
};

export default List;