import React from 'react';
import styles from './styles.module.css';
import Navbar from './navbar/Navbar';
import Name from './name/Name';
import Phone from './phone/Phone';
import Email from './email/Email';
import Password from './password/Password';
import Address from './address/Address';


const Small = () => {
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                <Name />

                <Phone />

                <Email />

                <Password />

                <Address />

            </div>

                
        </div>
    );
};

export default Small;