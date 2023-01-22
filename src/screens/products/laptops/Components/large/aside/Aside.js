import React from 'react';
import styles from './styles.module.css';
import Filters from './filters/Filters';


const Aside = () => {
    return (
        <aside className = {styles.aside}>
            
            <Filters />

        </aside>
    );
};

export default Aside;