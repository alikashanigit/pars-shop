import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../Product';
import Bookmark from './bookmark/Bookmark';
import Menu from './menu/Menu';



const Footer = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <footer className = {styles.footer}>
            
            <div>
                <button onClick = {() => setToggle({ ...toggle, shop: true })}>
                    سفارش دهید
                </button>
            </div>
            
            <ul className = {styles.menu}>
    
                <Bookmark />

                <Menu />
    
            </ul>

        </footer>
    );
};

export default Footer;