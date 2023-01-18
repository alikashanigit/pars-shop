import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { usePageTitle } from '../../../../hooks/custom';
import Small from './Components/sm/Small';
import Large from './Components/lg/Large';


export const ToggleContext = createContext();
const Ticket = () => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState({});
    const { userInfo } = useSelector(state => state.userLogin);
    useEffect(() => {

    }, [userInfo]);
    usePageTitle('تیکت ...');
    return (
        <main className = {styles.main}>
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            <Small />
            <Large />
        </ToggleContext.Provider>
        </main>
    );
};

export default Ticket;