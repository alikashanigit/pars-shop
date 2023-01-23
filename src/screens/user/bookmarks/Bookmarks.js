import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../hooks/custom';
import { getUserDetails } from '../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import Navbar from './Components/sm/navbar/Navbar';
import Shop from './Components/toggles/shop/Shop';


export const ToggleContext = createContext();
const Bookmarks = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState({
        allCategories: true,
        laptop: false,
        mobile: false,
        arcade: false,
        accessories: false,
    });
    const { userInfo } = useSelector(state => state.userLogin);

    // const { success } = useSelector(state => state.userNameEdit);
    
    useEffect(() => {
        userInfo && userInfo.firstName 
            ? dispatch(getUserDetails())
            : navigate('/registration', { replace: false });
    }, [userInfo]);

    usePageTitle('محصولات ذخیره شده');

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

export default Bookmarks;