import React from 'react';
import styles from './styles.module.css';


const Header = ({ children }) => {
    return (
        <header className = {styles.header}>
            {children[0]}
            {children[1]}
            {children[2]}
        </header>
    );
};

export default Header;