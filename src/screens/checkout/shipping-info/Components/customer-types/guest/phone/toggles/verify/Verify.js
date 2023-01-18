import React, { useContext } from 'react'
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { DataContext } from '../../../../CustomerTypes';
import { Backdrop } from '@mui/material';
import { verifyPhoneNumber } from '../../../../../../../../../redux/user/registration/actions';
import Header from './header/Header';
import Form from './form/Form';


const Verify = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const { data, setData } = useContext(DataContext);
    const changeHandler = (e) => setData({
        ...data,
        [e.target.name]: e.target.value,
    });
    const verifyPhoneNumberHandler = (e) => {
        e.preventDefault();
        if (!data.verifyCode) {
            return alert('تمام فیلدها الزامی می‌باشند')
        };
        dispatch(verifyPhoneNumber(data));
        // setToggle({
            
        //     verified: true,
        // });
    };
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.verify}>
            <div className = {styles.container}>
                <Header setToggle = {setToggle} />
                <Form 
                data = {data} 
                setData = {setData} 
                changeHandler = {changeHandler} 
                onAdd = {verifyPhoneNumberHandler}
                />
            </div>
        </Backdrop>
    )
}

export default Verify;