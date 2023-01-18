import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


const Small = () => {
    const { orders } = useSelector(state => state.userOrderList);
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                Orders

            </div>

            <Footer orders = {orders} />
                
        </div>
    );
};

export default Small;