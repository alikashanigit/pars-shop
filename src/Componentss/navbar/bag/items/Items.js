import React from 'react'
import styles from './styles.module.css'
import List from './list/List';



const Items = () => {
    return (
        <div className = {styles.container}>
            <span>سبد خرید</span>
            <List />
        </div>
    )
}

export default Items;