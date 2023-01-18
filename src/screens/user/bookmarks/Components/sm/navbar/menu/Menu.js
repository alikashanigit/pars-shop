import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import Categories from './categories/Categories';
import Header from './header/Header';
import Featured from './featured/Featured';
import Support from './support/Support';



const Menu = ({ open, setOpen }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <Header setOpen = {setOpen} />
                <Categories />
                <Featured />
                <Support />
            </div>
        </Backdrop>
    )
}

export default Menu