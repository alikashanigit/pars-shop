import React, { createContext, useEffect, useState } from 'react';
import Aside from './aside/Aside';
import Body from './body/Body';
import styles from './styles.module.css';


const Large = () => {

    return (
        <div className = {styles.lg}>
            <Aside />
            <Body />
        </div>

    );
};

export default Large;