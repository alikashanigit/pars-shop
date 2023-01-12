import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Navbar = ({ name, id }) => {
    return (
        <nav className = {styles.navbar}>
            <Link className = {styles.back_link} to = {`/product/${id}/reviews`}>
                <ArrowForwardIosIcon 
                sx = {{
                    position: 'relative',
                    right: '-4px',
                    width: '20px',
                }}
                />
                <span className = {styles.name}>نظرات</span>
            </Link>
        </nav>
    );
};

export default Navbar;