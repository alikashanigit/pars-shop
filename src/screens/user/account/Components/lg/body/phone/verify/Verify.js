import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { verifyPhoneNumber } from '../../../../../../../../redux/user/registration/actions';


const Verify = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState('');
    const { phoneVerificationInfo } = useSelector(state => state.userRegistrationPhoneNumberVerify);
    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);

    const changeHandler = (e) => setVerificationCode(e.target.value);
    const editHandler = (e) => {
        e.preventDefault();
        dispatch(verifyPhoneNumber(
            phoneVerificationInfo && phoneVerificationInfo.phoneNumber,
            verificationCode
        ));
        setToggle({
            ...toggle,
            verified: true,
        });
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
                        <label htmlFor = 'user_profile_form_verificationCode'>لطفا کد دریافتی را وارد نمایید</label>
                        <input id = 'user_profile_form_verificationCode'
                        type = 'text'
                        name = 'verificationCode'
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