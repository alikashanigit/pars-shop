import React, { createContext, useState } from 'react'
import styles from './styles.module.css';
import Details from './details/Details';
import Edit from './edit/Edit';


export const DataContext = createContext();
const Address = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        state: '',
        city: '',
        address: '',
        zipCode: '',
        details: '',
    });
    const changeHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    const openEdit = () => setOpen(true);
    return (
        <div className = {styles.container}>
            <div className={styles.header}>
                <span>محل تحویل</span>
                <button onClick = {openEdit}>ویرایش</button>
            </div>
            <DataContext.Provider value={{ data, setData, changeHandler }}>
                <Details />
                <Edit open={open} setOpen = {setOpen} />
            </DataContext.Provider>
        </div>
    )
}

export default Address