import React from 'react';
import styles from './styles.module.css';


const Header = ({ toggle, setToggle }) => {
    return (
        <header className = {styles.header}>
            <ul className = {styles.list}>
                <li className = {styles.item}>
                    <button onClick = {() => setToggle({ specs: true })}>
                        مشخصات
                    </button>
                </li>
                <li className = {styles.item}>
                    <button onClick = {() => setToggle({ reviews: true })}>
                        دیدگاه‌ها
                    </button>
                </li>
                <li className = {styles.item}>
                    <button onClick = {() => setToggle({ qa: true })}>
                        پرسش‌ها
                    </button>
                </li>
            </ul>
        </header>
    );
};

export default Header;