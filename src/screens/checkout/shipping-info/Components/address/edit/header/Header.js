import React from 'react'
import styles from './styles.module.css';


const Header = ({ setOpen }) => {
    return (
        <div className = {styles.header}>
            <div className = {styles.container}>
                <span>ویرایش محل تحویل</span>
            </div>
            <button onClick = {() => setOpen(false)}>
                لغو
            </button>
        </div>
    )
}

export default Header