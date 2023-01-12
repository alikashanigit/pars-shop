import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Menu from './menu/Menu';
import Bag from './bag/Bag';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [toggle, setToggle] = useState({
        menu: false,
        bag: false,
    });
    const openMenuHandler = () => setToggle({ menu: true });
    const openBagHandler = () => setToggle({ bag: true });
    const bagItems = [1, 2, 3];
    const notifications = [1, 2, 3, 4, 5];
    return (
        <>
        <nav className = {styles.navbar}>
            <div>
                <Link className = {styles.back_link} to = '/'>
                    <ArrowForwardIosIcon 
                    sx = {{
                        position: 'relative',
                        right: '-4px',
                        width: '20px',
                    }}
                    />
                    <span>لپتاپ‌ها</span>
                </Link>
            </div>
            <div>
                <Link to = '/'>PS</Link>
            </div>
            <div>
                <button onClick = {openBagHandler}>
                    <ShoppingBagIcon />
                    {notifications.length && 
                    <span className = {styles.badge}>{notifications.length}</span>
                    }
                </button>
                <button onClick = {openMenuHandler}>
                    <div className = {styles.cats_icon}>
                        <span></span>
                        <span></span>
                    </div>
                    {bagItems.length && 
                    <span className = {styles.badge}>{bagItems.length}</span>
                    }
                </button>
            </div>
        </nav>
        <Menu toggle = {toggle} setToggle = {setToggle} />
        <Bag toggle = {toggle} setToggle = {setToggle} />
        </>

    );
};

export default Navbar;