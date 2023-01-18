import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Active from './active/Active';
import { ToggleContext } from '../../Orders';
import Delivered from './delivered/Delivered';
import Canceled from './canceled/Canceled';
import Returned from './returned/Returned';


const Small = () => {
    const { toggle } = useContext(ToggleContext);
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                {toggle.active
                ? <Active />
                : toggle.delivered
                ? <Delivered />
                : toggle.canceled
                ? <Canceled />
                : <Returned />
                }

            </div>

            <Footer />
                
        </div>
    );
};

export default Small;