import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import Header from './header/Header';
import Footer from './footer/Footer';
import Items from './items/Items';

const Bag = ({ toggle, setToggle }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.bag}>
            <div className = {styles.container}>
                
                <Header setToggle = {setToggle} />

                <Items />
               
                <Footer />

            </div>
        </Backdrop>
    )
}

export default Bag