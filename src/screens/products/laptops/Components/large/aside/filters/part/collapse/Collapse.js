import React from 'react';
import styles from './styles.module.css';
import Search from './search/Search';


const Collapse = ({ title, children, id }) => {
    return (
        <div className = {`${styles.collapse} collapse`} id = {`landing_menu_categories_${id}`}>
            <Search title = {title} />
            {children}
        </div>
    );
};

export default Collapse;