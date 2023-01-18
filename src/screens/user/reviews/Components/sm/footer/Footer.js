import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Reviews';


const Footer = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <footer className = {styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button id = {toggle.submitted ? styles.active : ''} onClick = {() => setToggle({ submitted: true })}>
                        ثبت شده
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.waiting ? styles.active : ''} onClick = {() => setToggle({ waiting: true })}>
                        در انتظار ثبت
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;