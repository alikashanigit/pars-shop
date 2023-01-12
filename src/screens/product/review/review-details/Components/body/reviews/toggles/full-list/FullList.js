import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import { ToggleContext } from '../../../../../Product';
import Item from './item/Item';


const FullList = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const closeHandler = () => setToggle({ ...toggle, reviews: { all: false } });
    const openAddReview = () => setToggle({ ...toggle, reviews: { add: true } });
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.reviews.all}>
            <div className = {styles.container}>

                <div className={styles.header}>

                    <span>لیست کامل امتیازات و نظرات</span>

                    <button onClick = {closeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>

                </div>

                <div className = {styles.overall_rating}>
                    <span>امتیاز محصول</span>
                    ***
                </div>

                <ul className={styles.list}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ul>

                <div className={styles.footer}>
                    <button onClick={openAddReview}>امتیاز دهید و نظرتان را ثبت کنید</button>
                </div>

            </div>
        </Backdrop>
    );
};

export default FullList;