import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { RightArrowIcon } from '../../../../../icons';


const Navbar = () => {
    return (
        <navbar className = {styles.navbar}>
            
            <div className={styles.right}>
                <Link to = '/checkout/shipping-info'>
                    <RightArrowIcon color='#0288e0' />
                    <span>حمل و نقل</span>
                </Link>
            </div>
            
            <div>بررسی و پرداخت</div>

            <div></div>   
               
        </navbar>
    );
};

export default Navbar;