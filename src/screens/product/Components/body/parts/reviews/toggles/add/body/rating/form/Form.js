import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


const Form = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [rate, setRate] = useState(0);
    const { product } = useSelector(state => state.productDetails);
    // useEffect(() => {
        // product && setRate();
    //     rateHandler();
    // }, [rate])
    // const rateHandler = () => {
    //     dispatch(rate({ productId: id, userId, rate }));
    // };
    return (

        <form className={styles.form}>
            <label hidden>امتیاز دهید</label>
            <select>
                <option value = ''>امتیاز دهید</option>
                <option value={5}>
                    ۵
                </option>
                <option value={4}>
                    ۴
                </option>
                <option value={3}>
                    ۳
                </option>
                <option value={2}>
                    ۲
                </option>
                <option value={1}>
                    ۱
                </option>
            </select>
        </form>

    );
};

export default Form;