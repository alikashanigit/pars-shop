import React from 'react';
import styles from './styles.module.css';
import Bookmark from './bookmark/Bookmark';
import Compare from './compare/Compare';



const Footer = () => {
    return (
        <footer className = {styles.footer}>
            
            <Bookmark />

            <div>
                <button className={styles.add_btn}>
                    خرید محصول
                </button>
            </div>

            <Compare />

        </footer>
    );
};

export default Footer;