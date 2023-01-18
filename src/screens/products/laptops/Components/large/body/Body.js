import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import List from './list/List';


const Body = () => {
    return (
        <div className = {styles.body}>
            <Header />
            <List />
        </div>
    );
};

export default Body;