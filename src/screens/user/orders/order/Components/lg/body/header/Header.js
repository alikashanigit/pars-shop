import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Order';
import { Link } from 'react-router-dom';


const Header = ({ order }) => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const ordersTitle = toggle.active
        ? 'فعال'
        : toggle.delivered
        ? 'تحویل شده'
        : toggle.canceled
        ? 'لغو شده'
        : toggle.returned 
        && 'مرجوع شده';
    return (
        <header className = {styles.header}>
            
            <div>
                <Link to = '/account/orders'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    width = '16'
                    height = '16' 
                    fill = 'currentColor' 
                    class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    <span>سفارش‌های</span>
                    <span>{ordersTitle}</span>
                </Link>
            </div>

            <div></div>

            <div className={styles.code}>
                <span className={styles.title}>شماره‌ی سفارش</span>
                <span className={styles.value}>{order.orderCode}</span>
            </div>

        </header>
    );
};

export default Header;