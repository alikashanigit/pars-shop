import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../hooks/custom';
import { getUserDetails } from '../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import { useNavigate } from 'react-router';


export const ToggleContext = createContext();
const Bookmarks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState({
        submitted: true,
        waiting: false,
    });
    const { userInfo } = useSelector(state => state.userLogin);
    // const { success } = useSelector(state => state.userNameEdit);
    useEffect(() => {
        userInfo && userInfo.firstName 
            ? dispatch(getUserDetails())
            : navigate('/registration', { replace: true });
    }, [userInfo]);
    usePageTitle('محصولات ذخیره شده');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Small />
            <Large />
        </ToggleContext.Provider>
        </main>
    );
};

export default Bookmarks;