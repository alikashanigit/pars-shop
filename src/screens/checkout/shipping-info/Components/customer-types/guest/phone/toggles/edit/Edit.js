import React, { useContext } from 'react'
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { DataContext } from '../../../../CustomerTypes';
import { Backdrop } from '@mui/material';
import { addPhoneNumber } from '../../../../../../../../../redux/user/registration/actions';
import Header from './header/Header';
import Form from './form/Form';


const Edit = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const { data, setData, changeHandler } = useContext(DataContext);
    const addPhoneNumberHandler = (e) => {
        e.preventDefault();
        if (!data.phone) {
            return alert('تمام فیلدها الزامی می‌باشند')
        };
        dispatch(addPhoneNumber(data));
        setToggle({
            ...toggle,
            verify: true,
        });
    };
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.add}>
            <div className = {styles.container}>
                <Header setToggle = {setToggle} />
                <Form 
                data = {data} 
                setData = {setData} 
                changeHandler = {changeHandler} 
                onAdd = {addPhoneNumberHandler}
                />
            </div>
        </Backdrop>
    )
}

export default Edit