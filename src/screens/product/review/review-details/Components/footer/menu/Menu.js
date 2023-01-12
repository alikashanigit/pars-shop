import React, { useState } from 'react';
import styles from './styles.module.css';
import Container from './container/Container';


const Menu = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <li className={styles.menu}>
            <button onClick = {() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" fill="#777777" class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>
        </li>
        <Container open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Menu;