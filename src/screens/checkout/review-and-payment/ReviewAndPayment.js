import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import { usePageTitle } from '../../../hooks/custom';
import Methods from './Components/methods/Methods';
import Options from './Components/options/Options';
import Prices from './Components/prices/Prices';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';


export const ToggleContext = createContext();
const ReviewAndPayment = () => {
    const [toggle, setToggle] = useState({
        menu: false,
        search: false,
    });
    usePageTitle('بررسی و پرداخت');
    return (
        <main className = {styles.main}>
            <Navbar />
            <ToggleContext.Provider value = {{ toggle, setToggle }}>
                <div className = {styles.body}>
               
                    <Prices />
                    <Options />
                    <Methods />
               
                </div>
            </ToggleContext.Provider>
            <Footer />
        </main>
    );
};

export default ReviewAndPayment;