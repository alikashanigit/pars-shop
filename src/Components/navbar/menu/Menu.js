import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import Categories from './categories/Categories';
import Header from './header/Header';
import Featured from './featured/Featured';
import Support from './support/Support';



const Menu = ({ toggle, setToggle }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.menu}>
            <div className = {styles.container}>
                <Header setToggle = {setToggle} />
                <Categories />
                <Featured />
                <Support />
            </div>
        </Backdrop>
    )
}

export default Menu