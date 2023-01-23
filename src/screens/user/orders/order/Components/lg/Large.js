import React from 'react';
import styles from './styles.module.css';
import Menu from './aside/menu/Menu';
import Header from './body/header/Header';
import Actions from './aside/actions/Actions';
import { order } from '../../data';
import Details from './body/details/Details';
import Navbar from './navbar/Navbar';



const Large = () => {
    return (
        <>
        <Navbar />
        <div className = {styles.container}>
            <aside className={styles.aside}>
                <Menu />
                <Actions />
            </aside>
            <div className={styles.body}>
                
                <Header order = {order} />
                
                <Details order = {order} />

            </div>
        </div>
        </>
    );
};

export default Large;