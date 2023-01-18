import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { ToggleContext } from '../../Reviews';
import Navbar from './navbar/Navbar';
import Submitted from './submitted/Submitted';
import Footer from './footer/Footer';
import Waiting from './waiting/Waiting';


const Small = () => {
    const { toggle } = useContext(ToggleContext);
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                {toggle.submitted
                ? <Submitted />
                : <Waiting />
                }

            </div>

            <Footer />

        </div>
    );
};

export default Small;