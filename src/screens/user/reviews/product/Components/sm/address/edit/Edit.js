import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editName } from '../../../../../../../../redux/user/account/actions';


const Edit = ({ open, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
    });

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userNameEdit);
    
    // HARD-CODE //
    const user = {
        firstName: 'حسام',
        lastName: 'کرجی',
    };

    useEffect(() => {
        user && user.firstName && setData({
            firstName: user.firstName,
            lastName: user.lastName,
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
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <div className = {styles.header}>
                    <span>ویرایش نام</span>
                    <button onClick={() => setToggle({ name: false })}>
                        لغو
                    </button>
                </div>
                <form className = {styles.form}>
                    <div>
                        <label htmlFor = 'user_profile_form_firstName'>نام کوچک</label>
                        <input id = 'user_profile_form_firstName'
                        type = 'text'
                        name = 'firstName'
                        value = {data.firstName}
                        onChange = {changeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor = 'user_profile_form_lastName'>نام خانوادگی</label>
                        <input id = 'user_profile_form_lastName'
                        type = 'text'
                        name = 'lastName'
                        value = {data.lastName}
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