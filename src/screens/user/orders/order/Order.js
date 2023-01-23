import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../../hooks/custom';
import { getUserDetails } from '../../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import { useNavigate, useParams } from 'react-router';
import Navbar from './Components/sm/navbar/Navbar';
import { getOrderDetails } from '../../../../redux/user/orders/actions';
import Shop from './Components/toggles/shop/Shop';


export const ToggleContext = createContext();
const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [toggle, setToggle] = useState({
        active: true,
        delivered: false,
        returned: false,
        canceled: false,
        shop: false,
    });
    const statusQuery = toggle.active
        ? 'فعال'
        : toggle.delivered
        ? 'تحویل شده'
        : toggle.canceled
        ? 'لغو شده'
        : toggle.returned
        && 'مرجوع شده';
    const { userInfo } = useSelector(state => state.userLogin);
    useEffect(() => {
        userInfo && userInfo.firstName 
            ? dispatch(getUserDetails())
            : navigate('/registration', { replace: true });
        dispatch(getOrderDetails(id))
    }, [userInfo, toggle]);
    usePageTitle('جزییات سفارش');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Navbar />
            <Small />
            <Large />
            <Shop toggle={toggle} setToggle = {setToggle} />
        </ToggleContext.Provider>
        </main>
    );
};

export default Order;