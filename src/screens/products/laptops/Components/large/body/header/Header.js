import React from 'react';
import Categories from './categories/Categories';
import Search from './search/Search';
import Sort from './search/Search';
import styles from './styles.module.css';


const Header = () => {
    return (
        <header className = {styles.header}>
            
            <div>
                <span>لپتاپ‌ها</span>
                <Search />
            </div>


            
            <Categories />

        </header>
    );
};

export default Header;