import React from 'react';
import styles from './styles.module.css';
import Bookmark from './bookmark/Bookmark';
import Compare from './compare/Compare';
import Menu from './menu/Menu';
import Shop from './shop/Shop';



const Footer = () => {
    return (
        <footer className = {styles.footer}>
            
            <Shop />
            
            <ul className = {styles.menu}>
    
                <Bookmark />


                <Menu />
    
            </ul>

        </footer>
    );
};

export default Footer;