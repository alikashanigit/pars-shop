import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Menu from './menu/Menu';
import Bag from './bag/Bag';


const Navbar = () => {
    const { id } = useParams()
    const badgeRef = useRef();
    const navRef = useRef();
    const [toggle, setToggle] = useState({
        bag: false,
        categories: false,
    });
    const { bagItems } = useSelector(state => state.bag);
    useEffect(() => {
        if (toggle.bag || toggle.categories) {
            navRef.current.parentElement.parentElement.style.height = '100vh';
            navRef.current.parentElement.parentElement.style.overflowY = 'hidden';
        } else {
            navRef.current.parentElement.parentElement.style.minHeight = '100vh';
            navRef.current.parentElement.parentElement.style.overflowY = 'auto';
        }
        console.log(navRef.current.parentElement.parentElement)
    }, [toggle])
    const openBag = () => setToggle({ bag: true });
    const openCategories = () => setToggle({ categories: true });
    return (
        <>
        <nav ref = {navRef} className = {styles.navbar}>
            <div>
                <Link className = {styles.back_link} to = {`/product/${id}/reviews`}>
                    <ArrowForwardIosIcon 
                    sx = {{
                    position: 'relative',
                    right: '-4px',
                    width: '20px',
                    }}
                    />
                    <span>دیدگاه‌ها</span>
                </Link>
            </div>
            <div>دیدگاه جدید</div>
            <ul className={styles.menu}>
                <li className={styles.item}>
                    <button onClick = {openBag}>
                        <ShoppingBagIcon 
                        sx={{ fontSize: '1.3rem'}}
                        />
                        {bagItems.length > 0 && 
                        <span ref = {badgeRef} className = {styles.badge}>{bagItems.length}</span>
                        }
                    </button>
                </li>
                <li className={styles.item}>
                    <button onClick={openCategories}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        width = '20'
                        height = '20' 
                        fill = 'currentColor'
                        class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
        <Menu toggle = {toggle} setToggle = {setToggle}/>
        <Bag toggle = {toggle} setToggle = {setToggle}/>
        </>
    );
};

export default Navbar;