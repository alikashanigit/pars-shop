import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editEmail, editName } from '../../../../../../../../redux/user/account/actions';


const Edit = ({ open, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState('');

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userAccountEmailEdit);
    
    // HARD-CODE //
    const user = {
        email: 'alikaasafw@gmail.com',
    };

    useEffect(() => {
        user && user.email && setData(user.email);
    }, []);
    const changeHandler = (e) => setData(e.target.value);
    const editHandler = (e) => {
        e.preventDefault();
        dispatch(editEmail(data));
        setToggle({ email: false });
    };
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <div className = {styles.header}>
                    <span>تغییر ایمیل</span>
                    <button onClick={() => setToggle({ email: false })}>
                        لغو
                    </button>
                </div>
                <form className = {styles.form}>
                    <div>
                        <label htmlFor = 'user_profile_form_email'>لطفا ایمیل خود را وارد نمایید</label>
                        <input id = 'user_profile_form_email'
                        type = 'email'
                        name = 'email'
                        value = {data.email}
                        onChange = {changeHandler}
                        />
                    </div>
                    <button onClick = {editHandler}>دریافت لینک فعال‌سازی</button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Edit;