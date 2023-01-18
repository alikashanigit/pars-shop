import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Order';

const Header = ({ orderCode, status }) => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const styling = status === 'تحویل شده'
        ? styles.delivered
        : status === 'فعال'
        ? styles.active 
        : status === 'لغو شده'
        ? styles.canceled
        : styles.returned
        
    ;
    return (
        <header className = {styles.header}>
            <div>
                <span>کد سفارش</span>
                <span>{orderCode}</span>
            </div>
            
            <span id = {styling}>{status}</span>
            
        </header>
    );
};

export default Header;