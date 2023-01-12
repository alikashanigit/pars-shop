import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Backdrop } from '@mui/material';
import { suggesting } from '../../../../../../../../../../redux/product/reviews/product/actions';




const Suggestion = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [isSuggest, setIsSuggest] = useState('');
    const { loading, success, message, error } = useSelector(state => state.productReviewSuggestion)
    useEffect(() => {
        dispatch(suggesting(id, isSuggest));
    }, [isSuggest]);
    return (
        <>
        <Backdrop id = {styles.backdrop} open = {loading || message || error}>
            Loading...
        </Backdrop>
        <div className={styles.suggestion}>
            <label hidden htmlFor=''>به دیگران پیشنهاد می‌کنید؟</label>
            <select id = '' 
            value = {isSuggest} 
            onChange = {e => setIsSuggest(e.target.value)}
            >
                <option value = ''>به دیگران پیشنهاد می‌کنید؟ (بدون نظر)</option>
                <option value = 'پیشنهاد می‌کنم'>پیشنهاد می‌کنم</option>
                <option value = 'پیشنهاد نمی‌کنم'>پیشنهاد نمی‌کنم</option>
            </select>
        </div>
        </>
        
    );
};

export default Suggestion;