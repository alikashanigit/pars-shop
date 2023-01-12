import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Menu from './menu/Menu';
import Bag from './bag/Bag';


const Navbar = ({ isLanding, lastPagePath, lastPageTitle }) => {
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
                {!isLanding && 
                <>
                <Link className = {styles.back_link} to = '/'>
                    <ArrowForwardIosIcon 
                    sx = {{
                        position: 'relative',
                        right: '-4px',
                        width: '20px',
                    }}
                    />
                    {lastPageTitle && <span>{lastPageTitle}</span>}
                </Link>
                <span className={styles.slash}>/</span>
                <Link className={styles.category_link} to = ''>مک‌بوک</Link>
                </>
                }
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
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width = '25' height = '25' fill = '#555' className = "bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg> */}
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