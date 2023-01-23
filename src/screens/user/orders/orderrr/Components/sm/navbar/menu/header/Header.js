import React from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom';



const Header = ({ setToggle }) => {
    const notifications = [1,2,3];
    const closeMenuHandler = () => setToggle({ menu: false });
    return (
        <div className={styles.header}>
            <div>
                <Link to = 'contact'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                    </svg>
                    {notifications.length && 
                    <span className = {styles.badge}>{notifications.length}</span>
                    }
                </Link>
            </div>
            <div>
                <button onClick = {closeMenuHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0288e0" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
                </button>
            </div>
        </div>
    )
}

export default Header;