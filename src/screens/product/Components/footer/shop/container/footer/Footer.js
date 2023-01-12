import React from 'react';
import styles from './styles.module.css';


const Footer = ({ children }) => {
    return (
        <div className = {styles.footer}>
            <button>مقایسه کنید</button>
        </div>
    );
};

export default Footer;