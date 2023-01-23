import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Reviews';


const Header = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const ordersTitle = toggle.active
        ? 'فعال'
        : toggle.delivered
        ? 'تحویل شده'
        : toggle.canceled
        ? 'لغو شده'
        : toggle.returned 
        && 'مرجوع شده';
    return (
        <header className = {styles.header}>
            
            <div>
                امتیازات و نظرات
            </div>

            <div></div>

            <div>

                <button 
                id = {toggle.submitted ? styles.selected : ''}
                onClick={() => setToggle({ submitted: true })}
                >
                    <span>ثبت شده</span>
                </button>

                <button 
                id = {toggle.waiting ? styles.selected : ''}
                onClick={() => setToggle({ waiting: true })}
                >
                    <span>در انتظار ثبت</span>
                </button>

            </div>

        </header>
    );
};

export default Header;