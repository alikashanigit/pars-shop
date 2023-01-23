import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import Categories from './categories/Categories';



const Menu = ({ toggle, setToggle }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.categories}>
            <div className = {styles.hidden_back} onClick = {() => setToggle({ categories: false })} />
            
            <div className = {styles.container} >
                
                <span className={styles.sign}></span>

                <Categories />
               
            </div>
        </Backdrop>
    )
}

export default Menu