import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Order';


const Footer = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <footer className = {styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button onClick = {() => setToggle({ ...toggle, active: true })}>
                        فعال
                    </button>
                </li>
                <li className={styles.item}>
                    <button onClick = {() => setToggle({ ...toggle, delivered: true })}>
                        تحویل شده
                    </button>
                </li>
                <li className={styles.item}>
                    <button onClick = {() => setToggle({ ...toggle, canceled: true })}>
                        لغو شده
                    </button>
                </li>
                <li className={styles.item}>
                    <button onClick = {() => setToggle({ ...toggle, returned: true })}>
                        مرجوع شده
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;