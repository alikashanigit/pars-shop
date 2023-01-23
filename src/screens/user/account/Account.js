import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../hooks/custom';
import { getUserDetails } from '../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import { useNavigate } from 'react-router';
import Navbar from './Components/sm/navbar/Navbar';

export const ToggleContext = createContext();
const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState({
        name: false,
        email: false,
        address: false,
        password: false,
        phone: false,
    })
    const { userInfo } = useSelector(state => state.userLogin);
    useEffect(() => {
        userInfo && userInfo.firstName 
            ? dispatch(getUserDetails())
            : navigate('/registration', { replace: true });
    }, [userInfo]);
    usePageTitle('حساب کاربری');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Navbar />
            <Small />
            <Large />
        </ToggleContext.Provider>
        </main>
    );
};

export default Account;