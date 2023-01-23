import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../../hooks/custom';
import { getUserDetails } from '../../../../redux/user/account/actions';
import { getOrderDetails } from '../../../../redux/user/orders/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import { useParams } from 'react-router';


export const ToggleContext = createContext();
const Order = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const [toggle, setToggle] = useState({
        active: true,
        delivered: false,
        returned: false,
        canceled: false,
    });
    const { userInfo } = useSelector(state => state.userLogin);
    // const { success } = useSelector(state => state.userNameEdit);
    useEffect(() => {
        userInfo && userInfo.firstName && dispatch(getUserDetails());
    }, [userInfo]);
    useEffect(() => {
        dispatch(getOrderDetails(id));
    }, []);
    usePageTitle('جزییات سفارش');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Small />
            <Large />
        </ToggleContext.Provider>
        </main>
    );
};

export default Order;