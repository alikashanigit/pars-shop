import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const Small = () => {
    const { orders } = useSelector(state => state.userOrderActiveList);
    return (
        <div className = {styles.container}>
            

                
        </div>
    );
};

export default Small;