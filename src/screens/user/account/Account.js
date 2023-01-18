import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../hooks/custom';
import { getUserDetails } from '../../../redux/user/account/actions';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';
import { useNavigate } from 'react-router';


const Account = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userInfo } = useSelector(state => state.userLogin);
    useEffect(() => {
        userInfo && userInfo.firstName 
            ? dispatch(getUserDetails())
            : navigate('/registration', { replace: true });
    }, [userInfo]);
    usePageTitle('حساب کاربری');
    return (
        <main className = {styles.main}>
            <Small />
            <Large />
        </main>
    );
};

export default Account;