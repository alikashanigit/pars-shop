import React, { useState } from 'react'
import styles from './styles.module.css';
import Header from './header/Header';
import Value from './value/Value';
import Edit from './edit/Edit';


const Name = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <div className = {styles.container}>
            <Header setOpen = {setOpen} />
            <Value />
        </div>
        <Edit open = {open} setOpen = {setOpen} />
        </>
    )
}

export default Name