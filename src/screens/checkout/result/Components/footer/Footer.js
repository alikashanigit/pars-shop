import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className = {styles.footer}>

            <Link to = '/'>
                صفحه اصلی
            </Link>
            <Link to = '/orders'>
                سفارشات
            </Link>
            <Link to = '/service/pars-quiz'>
                پارس کوییز
            </Link>

        </footer>
    );
};

export default Footer;