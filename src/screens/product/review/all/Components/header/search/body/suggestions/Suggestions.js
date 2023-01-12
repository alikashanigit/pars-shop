import React from 'react';
import styles from './styles.module.css';
import List from './list/List';


const Suggestions = ({ queryData }) => {
    return (
        !queryData.keyword && 
        <div className = {styles.suggestions}>
            <span>ویژه‌ی شما</span>
            <List />
        </div>
    );
};

export default Suggestions;