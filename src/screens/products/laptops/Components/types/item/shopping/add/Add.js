import React from 'react';
import styles from './styles.module.css';
import { PlusFilledIcon } from '../../../../../../../../../../icons';


const Add = () => {
    return (
        <div className = {styles.add}>
            <button>
                <PlusFilledIcon color='#1c7afd' />
                <span>افزودن به سبد</span>
            </button>
        </div>
    );
};

export default Add;