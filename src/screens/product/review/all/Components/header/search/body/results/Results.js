import React from 'react';
import List from './list/List';
import styles from './styles.module.css';


const Results = ({ queryData }) => {
    return (
        <div className = {styles.results} id = {queryData.keyword ? styles.show : ''}>
            <div className={styles.header}>
                <span>نتایج</span>
                <span>(۷ محصول)</span>
            </div>
            <List />
        </div>
    );
};

export default Results;