import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Orders';


const Footer = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <footer className = {styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button id = {toggle.active ? styles.active : ''} onClick = {() => setToggle({ active: true })}>
                        فعال
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.delivered ? styles.active : ''} onClick = {() => setToggle({ delivered: true })}>
                        تحویل شده
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.canceled ? styles.active : ''} onClick = {() => setToggle({ canceled: true })}>
                        لغو شده
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.returned ? styles.active : ''} onClick = {() => setToggle({ returned: true })}>
                        مرجوع شده
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;