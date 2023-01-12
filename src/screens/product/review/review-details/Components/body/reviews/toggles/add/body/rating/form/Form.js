import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ratingProduct } from '../../../../../../../../../../../redux/product/reviews/product/actions';


const Form = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const { product } = useSelector(state => state.productDetails);
    useEffect(() => {
        // if rated ==> setRating(rating);
        dispatch(ratingProduct(id, rating));
    }, [rating]);
    return (

        <form className={styles.form}>
            <label hidden htmlFor = 'product_review_rating_form'>امتیاز دهید</label>
            <select id = 'product_review_rating_form'
            value = {rating}
            onChange = {e => setRating(e.target.value)}
            >
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