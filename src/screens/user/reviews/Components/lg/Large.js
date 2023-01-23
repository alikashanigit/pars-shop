import React from 'react';
import styles from './styles.module.css';
import Menu from './aside/menu/Menu';
import Header from './body/header/Header';
import Actions from './aside/actions/Actions';
import Navbar from './navbar/Navbar';
import Lists from './body/lists/Lists';


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

                <Header />

                <Lists />

            </div>
        </div>
        </>
    );
};

export default Large;