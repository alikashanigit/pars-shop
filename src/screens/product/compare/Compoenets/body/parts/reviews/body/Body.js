import React from 'react';
import styles from './styles.module.css';
import Summary from './summary/Summary';
import List from './list/List';


const Body = () => {
    return (
        <div className={styles.body}>
            <Summary />
            <List />
        </div>
    );
};

export default Body;