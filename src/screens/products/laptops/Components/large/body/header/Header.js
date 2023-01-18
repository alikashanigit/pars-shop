import React from 'react';
import styles from './styles.module.css';


const Header = ({ children }) => {
    return (
        <header className = {styles.header}>
            <div>Header</div>
        </header>
    );
};

export default Header;