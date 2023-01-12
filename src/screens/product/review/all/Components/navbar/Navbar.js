import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Navbar = () => {
    const { product } = useSelector(state => state.productDetails);
    return (
        <nav className = {styles.navbar}>
            <div className = {styles.back_links}>
                <Link className = {styles.products_link} to = '/'>
                    <ArrowForwardIosIcon 
                    sx = {{
                    position: 'relative',
                    right: '-4px',
                    width: '20px',
                    }}
                    />
                    <span>لپتاپ‌ها</span>
                    
                </Link>
                <span>/</span>
                <Link className={styles.back_link} to = {`/product/${product && product._id}/`}>{product && product.name}</Link>
            </div>

            <div>
                <Link to = '/'>PS</Link>
            </div>
        </nav>
    );
};

export default Navbar;