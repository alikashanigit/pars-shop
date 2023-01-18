import React from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.css';


const Item = ({ lastPath, lastTitle, nextPath, children, orderNumbers }) => {
    const navigate = useNavigate();
    const menuLink = (lastPath, lastTitle, nextPath) => {
        localStorage.setItem('lastPagePath', JSON.stringify(lastPath));
        localStorage.setItem('lastPageTitle', JSON.stringify(lastTitle));
        navigate(nextPath);
    };
    return (
        <li className={styles.item}>
            <button className={styles.btn} onClick = {() => menuLink(lastPath, lastTitle, nextPath)}>
                <div>
                    {children}
                </div>
                <div>
                    {orderNumbers && <span id={styles.order_nums}>{orderNumbers}</span>}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '16'
                    height = '16' 
                    fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
            </button>
        </li>
    );
};

export default Item;