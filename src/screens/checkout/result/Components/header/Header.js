import React from 'react'
import styles from './styles.module.css';
import { DoneIcon } from '../../../../../icons';


const Header = () => {
    const isSuccess = true;
    return (
        <header className={styles.header}>
            <DoneIcon width='45' height='45' color='#00d166' />
            {isSuccess
            ? <span className={styles.success}>موفق</span> 
            : <span className={styles.failed}>ناموفق</span>
            }
            <span className = {styles.order_id_title}>شماره سفارش</span>
            <span className = {styles.order_id_code}>۳۱۱۲۵۳</span>
        </header>
    )
}

export default Header