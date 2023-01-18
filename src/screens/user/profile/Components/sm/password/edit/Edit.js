import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editName, editPassword } from '../../../../../../../redux/user/account/actions';


const Edit = ({ open, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);
    
    // HARD-CODE //
    const user = {
        oldPassword: '123456',
    };

    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const editHandler = (e) => {
        e.preventDefault();
        if (data.password !== user.oldPassword) return alert('رمز قبلی اشتباه می‌باشد!')
        if (data.password < 8) return alert('حداقل ۸ کاراکتر!')
        if (data.password !== data.confirmPassword) return alert('رمزها هماهنگ نمی‌باشند!')
        dispatch(editPassword(data.password));
    };

    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <div className = {styles.header}>
                    <span>تغییر رمز عبور</span>
                    <button onClick={() => setToggle({ password: false })}>
                        لغو
                    </button>
                </div>
                <form className = {styles.form}>
                    <div>
                        <label htmlFor = 'user_profile_form_oldPassword'>رمز قبلی</label>
                        <input id = 'user_profile_form_oldPassword'
                        type = 'password'
                        name = 'oldPassword'
                        value = {data.oldPassword}
                        onChange = {changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor = 'user_profile_form_newPassword'>رمز جدید</label>
                        <input id = 'user_profile_form_newPassword'
                        type = 'password'
                        name = 'newPassword'
                        value = {data.newPassword}
                        onChange = {changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor = 'user_profile_form_confirmPassword'>تکرار رمز جدید</label>
                        <input id = 'user_profile_form_confirmPassword'
                        type = 'password'
                        name = 'confirmPassword'
                        value = {data.confirmPassword}
                        onChange = {changeHandler}
                        />
                    </div>
                    <button onClick = {editHandler}>ذخیره</button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Edit;