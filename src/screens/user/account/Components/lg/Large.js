import React from 'react';
import styles from './styles.module.css';
import Menu from './aside/menu/Menu';
import Name from './body/name/Name';
import Email from './body/email/Email';
import Phone from './body/phone/Phone';
import Password from './body/password/Password';
import Address from './body/address/Address';
import Header from './body/header/Header';
import Actions from './aside/actions/Actions';


const Large = () => {
    return (
        <div className = {styles.container}>
            <aside className={styles.aside}>
                <Menu />
                <Actions />
            </aside>
            <div className={styles.body}>
                <Header />
                <div>
                    <Name />
                    <Phone />
                    <Email />
                    <Password />
                    <Address />
                </div>
            </div>
        </div>
    );
};

export default Large;