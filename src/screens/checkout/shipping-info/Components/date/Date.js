import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editDate } from '../../../../../redux/order/shipping/actions';
import Days from './days/Days';
import styles from './styles.module.css';
import Times from './times/Times';


export const DataContext = createContext();
const Date = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        day: '',
        time: '',
    });
    const editDateHandler = (value) => {
        dispatch(editDate(value));
    };
    return (
        <div className = {styles.container}>
            
            <div>
                <span>روز تحویل</span>            
                <Days
                data = {data}
                setData = {setData}
                onEdit = {editDateHandler}
                />
            </div>
            
            <div>
                <span>ساعت تحویل</span>            
                <Times
                data = {data}
                setData = {setData}
                onEdit = {editDateHandler}
                />
            </div>
            
        </div>
    )
}

export default Date;