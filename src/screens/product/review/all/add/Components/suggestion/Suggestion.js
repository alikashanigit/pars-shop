import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { suggestion } from '../../../../../../../redux/product/reviews/product/actions';
import styles from './styles.module.css';


const Suggestion = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [value, setValue] = useState('');
    useEffect(() => {
        dispatch(suggestion(id, value))
    }, [value, suggestion, dispatch]);
    return (
        <form className = {styles.suggestion}>
            <label htmlFor = 'product_review_add_rating_form'>به دیگران نیز پیشنهاد می‌کنید؟</label>
            <select id = 'product_review_add_rating_form'
            value = {value}
            onChange = {(e) => setValue(e.target.value)}
            >
                <option value = ''>بدون پیشنهاد</option>
                <option value = 'پیشنهاد می‌کنم'>پیشنهاد می‌کنم</option>
                <option value = 'پیشنهاد نمی‌کنم'>پیشنهاد نمی‌کنم</option>
            </select>
        </form>
    );
};

export default Suggestion;