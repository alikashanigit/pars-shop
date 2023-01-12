import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CPU from './cpu/CPU';
import Gpu from './gpu/GPU';


const Processors = () => {
    return (
        <div className = {styles.category}>
            <CPU />
            <Gpu />
        </div>
    );
};

export default Processors;