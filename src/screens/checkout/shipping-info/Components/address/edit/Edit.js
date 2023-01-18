import React, { useContext } from 'react'
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { DataContext } from '../Address';
import { editName } from '../../../../../../redux/order/shipping/actions';
import { Backdrop } from '@mui/material';
import Header from './header/Header';
import Form from './form/Form';


const Edit = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { data, setData, changeHandler } = useContext(DataContext);
    const editNameHandler = (e) => {
        e.preventDefault();
        if (!data.firstName || !data.lastName) {
            return alert('تمام فیلدها الزامی می‌باشند')
        };
        dispatch(editName({
            firstName: data.firstName,
            lastName: data.lastName,
        }));
        setOpen(false);
    };
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>
                <Header setOpen = {setOpen} />
                <Form 
                data = {data} 
                setData = {setData} 
                changeHandler = {changeHandler} 
                onEdit = {editNameHandler}
                />
            </div>
        </Backdrop>
    )
}

export default Edit