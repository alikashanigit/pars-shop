import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Orders';


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
                <span>سفارش‌های</span>
                <span>{ordersTitle}</span>
            </div>

            <div></div>

            <div>
                {!toggle.active &&
                <button 
                id = {toggle.active ? styles.selected : ''}
                onClick={() => setToggle({ active: true })}
                >
                    <span>فعال</span>
                </button>
                }
                {!toggle.delivered &&
                <button 
                id = {toggle.delivered ? styles.selected : ''}
                onClick={() => setToggle({ delivered: true })}
                >
                    <span>تحویل شده</span>
                </button>
                }
                {!toggle.canceled &&
                <button 
                id = {toggle.canceled ? styles.selected : ''}
                onClick={() => setToggle({ canceled: true })}
                >
                    <span>لغو شده</span>
                </button>
                }
                {!toggle.returned &&
                <button 
                id = {toggle.returned ? styles.selected : ''}
                onClick={() => setToggle({ returned: true })}
                >
                    <span>مرجوع شده</span>
                </button>
                }
            </div>

        </header>
    );
};

export default Header;