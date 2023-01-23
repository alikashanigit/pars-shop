import React from 'react'
import styles from './styles.module.css'
import List from './list/List';



const Featured = () => {
    return (
        <div className = {styles.container}>
            <span>ویژه‌ها</span>
            <List />
        </div>
    )
}

export default Featured;