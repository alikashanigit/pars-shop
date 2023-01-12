import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import CurrentProduct from './products/current/CurrentProduct';
import SelectedProducts from './products/added/AddedProducts';
import CompareProducts from './products/compare/Compare';
import Footer from './footer/Footer';


const Container = ({ open, setOpen }) => {
    return (
        <Backdrop open = {open} id = {styles.backdrop}>
            <div className={styles.container}>

                <div className={styles.header}>
                    <span>مقایسه با</span>
                    <button onClick={() => setOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>

                <div>

                    <CurrentProduct />
                   
                    <SelectedProducts />

                    <CompareProducts />


                </div>

                <Footer />

            </div>
        </Backdrop>
    );
};

export default Container;