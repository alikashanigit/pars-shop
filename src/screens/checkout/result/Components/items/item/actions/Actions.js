import React, { useState } from 'react';
import { DashLgIcon, DeleteIcon, PlusFilledIcon, PlusLgIcon } from '../../../../../../../icons';
import styles from './styles.module.css';


const Actions = ({ qty, setQty }) => {
    
    const incrementHandler = () => setQty(qty + 1);
    const decrementHandler = () => qty > 1 && setQty(qty - 1);
    return (
        <div className = {styles.actions}>

            <button>
                <PlusFilledIcon color = '#ff4747' />
                <span>سفارش مجدد محصول</span>
            </button>

        </div>
    );
};

export default Actions;