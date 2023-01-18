import React, { useEffect } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Form = ({ data, setData, changeHandler, onEdit }) => {
    const { guestInfo, success } = useSelector(state => state.shipping);
    useEffect(() => {
        guestInfo.firstName && setData({
            ...data,
            firstName: guestInfo.firstName,
            lastName: guestInfo.lastName,
        });
    }, [guestInfo, success])
    return (
        <form className = {styles.form}>
            <div className = {styles.container}>
                <label htmlFor = 'checkout_shipping_guest_firstName'>نام کوچک</label>
                <input id = ''
                type = 'text' placeholder = 'مثال: سارا'
                name = 'firstName'
                value = {data.firstName}
                onChange = {changeHandler}
                />
            </div>
            <div className = {styles.container}>
                <label htmlFor = 'checkout_shipping_guest_lastName'>نام خانوادگی</label>
                <input id = ''
                type = 'text' placeholder = 'مثال: اکبری'
                name = 'lastName'
                value = {data.lastName}
                onChange = {changeHandler}
                />
            </div>
            <button onClick = {onEdit}>
                ذخیره
            </button>
        </form>
    )
}

export default Form