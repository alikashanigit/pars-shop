import React from 'react';
import Search from './search/Search';
import styles from './styles.module.css';


const Aside = () => {
    return (
        <aside className = {styles.aside}>
            <Search />
        </aside>
    );
};

export default Aside;