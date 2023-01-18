import React, { createContext, useState } from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Guest from './guest/Guest';
import User from './user/User';


export const DataContext = createContext();
const CustomerTypes = () => {
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        verifyCode: '',
        email: '',
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const { guestInfo, userInfo } = useSelector(state => state.shipping);
    return (
        <div className = {styles.container}>
            <span>تحویل گیرنده</span>
            <DataContext.Provider value={{ data, setData, changeHandler }}>
                {guestInfo && !userInfo.firstName ? <Guest /> : <User />}
            </DataContext.Provider>
        </div>
    )
}

export default CustomerTypes