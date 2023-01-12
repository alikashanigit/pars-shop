import React from 'react'
import styles from './styles.module.css'
import List from './list/List';



const Menu = () => {
    return (
        <div className = {styles.container}>
            <List />
        </div>
    )
}

export default Menu;