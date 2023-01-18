import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../../hooks/custom';
import { getUserDetails } from '../../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';


export const ToggleContext = createContext();
const Orders = () => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState({
        name: false,
        email: false,
        password: false,
        phone: false,
        phoneVerify: false,
        phoneVerified: false,
        address: false,
    });
    const { userInfo } = useSelector(state => state.userLogin);
    // const { success } = useSelector(state => state.userNameEdit);
    useEffect(() => {
        userInfo && userInfo.firstName && dispatch(getUserDetails());
    }, [userInfo]);
    usePageTitle('سفارشات');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Small />
            <Large />
        </ToggleContext.Provider>
        </main>
    );
};

export default Orders;