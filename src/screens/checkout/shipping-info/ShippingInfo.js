import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import CustomerTypes from './Components/customer-types/CustomerTypes';
import Date from './Components/date/Date';
import Address from './Components/address/Address';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';




export const ToggleContext = createContext();
const ShippingInfo = ({ lastPagePath }) => {
    const [toggle, setToggle] = useState({});
    return (
        <main className = {styles.main}>             
            
            <Navbar />
            
            <ToggleContext.Provider value = {{ toggle, setToggle }}>
                <div className = {styles.body}>

                    <CustomerTypes />

                    <Address />

                    <Date />

                </div>
            </ToggleContext.Provider>
            
            <Footer />

        </main>
    );
};

export default ShippingInfo;