import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrop } from '@mui/material';
import { editName } from '../../../../../../../redux/user/account/actions';
import Form from './form/Form';


const Edit = ({ open, setToggle }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        state: '',
        city: '',
        street: '',
        zipCode: '',
        details: '',
    });

    // const { user } = useSelector(state => state.userDetails);
    // const { loading, success, error, message } = useSelector(state => state.userShippingAddress);
    
    // HARD-CODE //
    const user = {
        state: '',
        city: '',
        street: '',
        zipCode: '',
        details: '',
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
                <Form data={data} setData = {setData} changeHandler = {changeHandler} />
            </div>
        </Backdrop>
    );
};

export default Edit;