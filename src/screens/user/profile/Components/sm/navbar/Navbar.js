import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Menu from './menu/Menu';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const openMenuHandler = () => setOpen(true);
    return (
        <>
        <nav className = {styles.navbar}>
            <div>
                <Link className = {styles.back_link} to = '/account'>
                    <ArrowForwardIosIcon 
                    sx = {{
                        position: 'relative',
                        right: '-4px',
                        width: '20px',
                    }}
                    />
                    حساب کاربری
                </Link>
            </div>
            <div>
                اطلاعات کاربری
            </div>
            <div>
                <button onClick = {openMenuHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '16'
                    height = '16' 
                    fill = 'currentColor'
                    class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </button>
            </div>
        </nav>
        <Menu open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Navbar;