import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Bookmarks';


const Footer = ({ setCategory }) => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const openLaptops = () => {
        setToggle({ laptop: true });
        setCategory('لپتاپ');
    };
    const openMobiles = () => {
        setToggle({ mobile: true });
        setCategory('موبایل');
    };
    const openArcades = () => {
        setToggle({ arcade: true });
        setCategory('بازی');
    };
    const openAccessories = () => {
        setToggle({ accessories: true });
        setCategory('لوازم جانبی');
    };
    return (
        <footer className = {styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <button id = {toggle.laptop ? styles.active : ''} onClick = {openLaptops}>
                        لپتاپ
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.mobile ? styles.active : ''} onClick = {openMobiles}>
                        موبایل
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.arcade ? styles.active : ''} onClick = {openArcades}>
                        بازی
                    </button>
                </li>
                <li className={styles.item}>
                    <button id = {toggle.accessories ? styles.active : ''} onClick = {openAccessories}>
                        لوازم جانبی
                    </button>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;