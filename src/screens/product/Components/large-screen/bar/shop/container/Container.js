import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import { ToggleContext } from '../../../../../Product';



const Container = () => {
    const { toggle, setToggle } = useContext(ToggleContext)
    return (
        <Backdrop open = {toggle.shop} id = {styles.backdrop} onClick = {() => setToggle({ ...toggle, shop: false })}>
            <div className={styles.container} id = {toggle.shop ? styles.open : ''}>
                <button onClick = {() => setToggle({ fullSpecs: true })}>
                    مشخصات
                </button>
                <button onClick = {() => setToggle({ allReviews: true })}>
                    امتیاز و نظرات
                </button>
            </div>
        </Backdrop>
    );
};

export default Container;