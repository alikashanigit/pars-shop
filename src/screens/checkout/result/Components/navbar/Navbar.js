import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className = {styles.navbar}>

            <Link to = '/'>
                صفحه اصلی
            </Link>
            <Link to = '/orders'>
                سفارشات
            </Link>
            <Link to = '/service/pars-quiz'>
                پارس کوییز
            </Link>

        </nav>
    );
};

export default Navbar;