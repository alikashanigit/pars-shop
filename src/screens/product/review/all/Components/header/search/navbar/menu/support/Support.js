import React from 'react'
import styles from './styles.module.css'
import List from './list/List';



const Support = () => {
    return (
        <div className = {styles.container}>
            <span>پشتیبانی</span>
            <List />
        </div>
    )
}

export default Support;