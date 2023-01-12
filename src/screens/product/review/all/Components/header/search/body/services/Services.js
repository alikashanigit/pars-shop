import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../../Landing';
import List from './list/List';


const Services = () => {
    const { toggle: { menu } } = useContext(ToggleContext);
    return (
        <div className = {styles.services} id = {menu ? styles.open : ''}>
            <span>سرویس‌ها و خدمات پارس</span>
            <List />
        </div>        
    );
};

export default Services;