import React from 'react'
import styles from './styles.module.css'
import Backdrop from '@mui/material/Backdrop';
import Menu from './menu/Menu';
import Items from './items/Items';

const Bag = ({ toggle, setToggle }) => {
    
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.bag}>
            <div className = {styles.hidden_back} onClick = {() => setToggle({ bag: false })} />
            <div className = {styles.container} >
                
                <span className={styles.sign}></span>

                <Menu />

                <Items />
               
            </div>
        </Backdrop>
    )
}

export default Bag