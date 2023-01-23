import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Rating from './rating/Rating';


const Header = () => {
    return (
        <header className = {styles.header}>

            <Rating />

            <div>
                <Link to = 'add-review'>امتیاز و دیدگاه شما</Link>
            </div>

        </header>

    );
};

export default Header;