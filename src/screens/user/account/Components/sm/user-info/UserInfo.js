import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const UserInfo = () => {
    // const { user } = useSelector(state => state.userDetails);
    const user = {
        fullName: 'سارا مکتبی',
        phone: '۰۹۹۹۴۴۲۵۵۲۱',

    }
    return (
        <Link to = 'profile' className = {styles.user_info}>
            <div className = {styles.details}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                <div>
                    <span className={styles.name}>
                        {user.fullName}
                    </span>
                    <span className={styles.phone}>
                        {user.phone}
                    </span>
                </div>
            </div>
            <div>
                <span>ویرایش</span>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '16' height = '16' fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
        </Link>
    );
};

export default UserInfo;