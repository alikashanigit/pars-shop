import React from 'react';
import styles from './styles.module.css';
import Navbar from './navbar/Navbar';
import UserInfo from './user-info/UserInfo';
import Menu from './menu/Menu';
import Actions from './actions/Actions';
import Footer from './footer/Footer';
import LastVisited from './last-visited/LastVisited';
import { useSelector } from 'react-redux';


const Small = () => {
    const { orders } = useSelector(state => state.userOrderActiveList);
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                <UserInfo />

                <Menu orders = {orders} />

                <Actions />

                <LastVisited />

            </div>

            <Footer orders = {orders} />
                
        </div>
    );
};

export default Small;