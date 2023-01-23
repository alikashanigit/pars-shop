import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { addPhoneNumber } from '../../../../../../../../redux/user/registration/actions';


const Edit = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const [phone, setPhone] = useState('');

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);
    
    // HARD-CODE //
    const user = {
        phone: '09124234221',
    };

    useEffect(() => {
        user && user.phone && setPhone(user.phone);
    }, []);
    const changeHandler = (e) => setPhone(e.target.value);
    const editHandler = (e) => {
        e.preventDefault();
        dispatch(addPhoneNumber(phone));
        setToggle({
            ...toggle, 
            phoneVerify: true,
        })
    };
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.phone}>
            <div className = {styles.container}>
                <div className = {styles.header}>
                    <span>ویرایش شماره‌ی همراه</span>
                    <button onClick={() => setToggle({ phone: false })}>
                        لغو
                    </button>
                </div>
                <form className = {styles.form}>
                    <div>
                        <label htmlFor = 'user_profile_form_phone'>لطفا شماره‌ی خود را وارد نمایید</label>
                        <input id = 'user_profile_form_phone'
                        type = 'text'
                        name = 'phone'
                        value = {phone}
                        onChange = {changeHandler}
                        />
                    </div>
                    <button type='button' onClick = {editHandler}>دریافت کد تایید</button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Edit;