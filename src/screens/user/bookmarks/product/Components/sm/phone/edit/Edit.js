import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editName } from '../../../../../../../redux/user/account/actions';


const Edit = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        phone: '',
        lastName: '',
    });

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);
    
    // HARD-CODE //
    const user = {
        phone: 'حسام',
    };

    useEffect(() => {
        user && user.firstName && setData({
            phone: user.phone,
        });
    }, []);
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const editHandler = (e) => {
        e.preventDefault();
        dispatch(editName(data));
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
                        value = {data.phone}
                        onChange = {changeHandler}
                        />
                    </div>
                    <button type='button' onClick = {() => setToggle({
                        ...toggle, 
                        phoneVerify: true,
                    })}>دریافت کد تایید</button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Edit;