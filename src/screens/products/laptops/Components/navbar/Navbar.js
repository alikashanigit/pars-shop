import React, { useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Menu from './menu/Menu';
import Bag from './bag/Bag';


const Navbar = ({ isLanding, lastPagePath, lastPageTitle }) => {
    const [toggle, setToggle] = useState({
        menu: false,
        bag: false,
    });
    const openBagHandler = () => setToggle({ bag: true });
    const { bagItems } = useSelector(state => state.bag);
    return (
        <>
        <nav className = {styles.navbar}>
            <div>
                <Link className = {styles.back_link} to = {lastPagePath}>
                    <ArrowForwardIosIcon 
                    sx = {{
                    position: 'relative',
                    right: '-4px',
                    width: '20px',
                    }}
                    />
                </Link>
            </div>
            <div>
                <Link to = '/'>PS</Link>
            </div>
            <div>
                <button 
                onClick = {openBagHandler}
                >
                    <ShoppingBagIcon />
                    {bagItems.length && 
                    <span className = {styles.badge}>{bagItems.length}</span>
                    }
                </button>
                <button 
                // onClick = {openMenuHandler}
                >
                    
                    <div className = {styles.cats_icon}>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </nav>
        <Menu toggle = {toggle} setToggle = {setToggle} />
        <Bag toggle = {toggle} setToggle = {setToggle} />
        </>

    );
};

export default Navbar;