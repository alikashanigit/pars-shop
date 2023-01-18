import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editName } from '../../../../../../../redux/user/account/actions';


const Verify = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        verificationCode: '',
    });

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);

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
        <Backdrop id = {styles.backdrop} open = {toggle.phoneVerify}>
            <div className = {styles.container}>
                <div className = {styles.header}>
                    <button onClick={() => setToggle({ phone: true })}>
                        تغییر شماره
                    </button>
                    <button onClick={() => setToggle({ phone: false })}>
                        لغو
                    </button>
                </div>
                <form className = {styles.form}>
                    <div>
                        <label htmlFor = 'user_profile_form_phone'>لطفا کد دریافتی را وارد نمایید</label>
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
                    })}>تایید</button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Verify;