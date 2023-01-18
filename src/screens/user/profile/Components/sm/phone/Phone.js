import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { ToggleContext } from '../../../Profile';
import Edit from './edit/Edit';
import Verify from './verify/Verify';


const Phone = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    // const { user } = useSelector(state => state.userDetails);
    const user = {
        phone: '۰۹۲۱۲۳۴۳۱۴',
    }
    return (
        <div className = {styles.part}>
            <button onClick = {() => setToggle({ phone: true })}>
                <div>
                    <span>شماره‌ی همراه</span>
                    <span>{user.fullName && user.fullName}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '16'height = '16' fill = 'currentColor'
                class="bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                </svg>
            </button>
            <Edit toggle = {toggle} setToggle = {setToggle} />
            <Verify toggle = {toggle} setToggle = {setToggle} />
        </div>
    );
};

export default Phone;