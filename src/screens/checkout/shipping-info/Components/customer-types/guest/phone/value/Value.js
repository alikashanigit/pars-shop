import React from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Value = () => {
    const { guestInfo } = useSelector(state => state.shipping)
    return (
        <div className = {styles.container}>
            {guestInfo && guestInfo.phone 
            ? <span className={styles.value}>{guestInfo.phone}</span>
            : <span className={styles.message}>
                لطفا شماره‌ی همراه خود را وارد نمایید
            </span>
            }
        </div>
    )
}

export default Value