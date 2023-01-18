import React from 'react'
import { useSelector } from 'react-redux';
import styles from './styles.module.css';


const Value = () => {
    const { guestInfo } = useSelector(state => state.shipping)
    return (
        <div className = {styles.container}>
            {guestInfo && guestInfo.firstName 
            ? <span className={styles.value}>
                {guestInfo.firstName}
                {' '}
                {guestInfo.lastName}
            </span>
            : <span className={styles.message}>
                لطفا نام کامل خود را وارد نمایید
            </span>
            }
        </div>
    )
}

export default Value