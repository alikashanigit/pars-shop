import React, { useState } from 'react'
import styles from './styles.module.css';
import Header from './header/Header';
import Value from './value/Value';
import Edit from './toggles/edit/Edit';
import Verify from './toggles/verify/Verify';


const Phone = () => {
    const [toggle, setToggle] = useState({
        add: false,
        verify: false,
        verified: false,
    });
    return (
        <>
        <div className = {styles.container}>
            <Header setToggle = {setToggle} />
            <Value />
        </div>
        <Edit toggle = {toggle} setToggle = {setToggle} />
        <Verify toggle = {toggle} setToggle = {setToggle} />
        </>
    )
}

export default Phone