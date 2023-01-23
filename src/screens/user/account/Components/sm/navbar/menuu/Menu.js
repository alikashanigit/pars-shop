import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import ProductCategories from './product-categories/ProductCategories';
import Header from './header/Header';
import Featured from './featured/Featured';
import Support from './support/Support';



const Menu = ({ toggle, setToggle }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.categories}>
            <div className = {styles.container}>
                <Header setToggle = {setToggle} />
                <ProductCategories />
                <Featured />
                <Support />
            </div>
        </Backdrop>
    )
}

export default Menu