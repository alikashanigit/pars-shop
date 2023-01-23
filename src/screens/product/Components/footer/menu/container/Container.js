import React from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';



const Container = ({ open, setOpen, setToggle, }) => {
    return (
        <Backdrop open = {open} id = {styles.backdrop} onClick = {() => setOpen(false)}>
            <div className={styles.container} id = {open ? styles.open : ''}>
                <button onClick = {() => setToggle({ specs: true })}>
                    مشخصات
                </button>
                <button onClick = {() => setToggle({ allReviews: true })}>
                    نظرات
                </button>
                <button onClick = {() => setToggle({ allReviews: true })}>
                    ثبت امتیاز و نظر
                </button>
            </div>
        </Backdrop>
    );
};

export default Container;