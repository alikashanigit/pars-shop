import React from 'react';
import styles from './styles.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <span className = {styles.client}>سارا احمدی</span>
                <span>(خریدار)</span>
            </div>
            <span className = {styles.client}>۲۴ مهر ۱۴۰۱</span>
        </div>
    );
};

export default Header;