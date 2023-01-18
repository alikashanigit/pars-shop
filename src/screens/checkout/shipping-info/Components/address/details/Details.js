import React, { createContext, useState } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Details = () => {
    const { addressInfo } = useSelector(state => state.shipping);
    return (
        <>
        <div className={styles.container}>
            <div className = {styles.state_city}>
                <span className={styles.state}>
                    {addressInfo.state}    
                </span>
                <span>-</span>
                <span className={styles.city}>
                    {addressInfo.city}    
                </span>
            </div>
            <div className = {styles.address}>
                <span className={styles.street}>
                    {addressInfo.street}
                </span>
                <div className={styles.zipCode}>
                    <span>کد پستی</span>
                    <span className={styles.zipCode_value}>
                        {addressInfo.zipCode}
                    </span>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Details