import React, { useEffect } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Form = ({ data, setData, changeHandler, onAdd }) => {
    const { guestInfo, success } = useSelector(state => state.shipping);
    useEffect(() => {
        guestInfo.phone && setData({
            ...data,
            phone: guestInfo.phone,
            lastName: guestInfo.lastName,
        });
    }, [guestInfo, success])
    return (
        <form className = {styles.form}>
            <div className = {styles.container}>
                <label htmlFor = 'checkout_shipping_guest_phone'>لطفا شماره‌ی همراه خود را وارد نمایید</label>
                <input id = ''
                type = 'text' placeholder = 'مثال: ۰۹۱۳۴۱۲۲۴۲۱'
                name = 'phone'
                value = {data.phone}
                onChange = {changeHandler}
                />
            </div>
            <button onClick = {onAdd}>
                دریافت کد تایید
            </button>
        </form>
    )
}

export default Form