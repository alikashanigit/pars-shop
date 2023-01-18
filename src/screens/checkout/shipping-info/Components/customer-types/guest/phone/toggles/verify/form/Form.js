import React, { useEffect } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Form = ({ data, setData, changeHandler, onAdd }) => {
    const { guestInfo, success } = useSelector(state => state.shipping);
    useEffect(() => {
        guestInfo.phone && setData({
            ...data,
            phone: guestInfo.phone,
        });
    }, [guestInfo, success]);
    return (
        <form className = {styles.form}>
            <div className = {styles.container}>
                <label htmlFor = 'checkout_shipping_guest_verifyCode'>لطفا کد دریافتی را وارد نمایید</label>
                <input id = ''
                type = 'text' placeholder = 'مثال: ۰۹۱۳۴۱۲۲۴۲۱'
                name = 'verifyCode'
                value = {data.verifyCode}
                onChange = {changeHandler}
                />
                <div className={styles.resend}>
                    <span>ارسال مجدد</span>
                    <span>(۵۶ ثانیه)</span>
                </div>
            </div>
            <button onClick = {onAdd}>
                تایید
            </button>
        </form>
    )
}

export default Form