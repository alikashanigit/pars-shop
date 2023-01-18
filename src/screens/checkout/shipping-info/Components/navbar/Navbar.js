import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { RightArrowIcon } from '../../../../../icons';


const Navbar = () => {
    const lastPagePath = localStorage.getItem('lastPagePath')
        ? JSON.parse(localStorage.getItem('lastPagePath'))
        : '';
    return (
        <navbar className = {styles.navbar}>
            
            <div className={styles.right}>
                <Link to = {lastPagePath ? lastPagePath : '/'}>
                    <RightArrowIcon color='#0288e0' />
                    
                </Link>
            </div>
            
            <div>
                اطلاعات حمل و نقل
            </div>

            <div>
                
                
            </div>   
               
        </navbar>
    );
};

export default Navbar;