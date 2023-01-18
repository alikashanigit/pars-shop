import React from 'react'
import styles from './styles.module.css';


const Header = ({ setToggle }) => {
    return (
        <div className = {styles.header}>
            <div className = {styles.container}>
                <span>ویرایش شماره‌ی همراه</span>
                <span className={styles.customer_type}>مهمان</span>
            </div>
            <button onClick = {() => setToggle({ add: false })}>
                لغو
            </button>
        </div>
    )
}

export default Header