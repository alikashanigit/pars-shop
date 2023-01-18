import React from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';


const Header = ({ setToggle }) => {
    const { guestInfo } = useSelector(state => state.shipping);
    return (
        <div className = {styles.header}>
            <button onClick = {() => setToggle({ add: false })}>
                <span>تغییر شماره</span>
                <span>({guestInfo.phone})</span>
            </button>
            <button onClick = {() => setToggle({ add: false })}>
                لغو
            </button>
        </div>
    )
}

export default Header