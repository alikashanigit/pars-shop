import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { ratingProduct } from '../../../../../../../redux/product/reviews/product/actions';
import styles from './styles.module.css';
import Rating from './rating/Rating';


const Footer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [rating, setRating] = useState('');
    useEffect(() => {
        dispatch(ratingProduct(id, rating));
    }, [rating]);
    return (
        <footer className = {styles.footer}>
            <div className = {styles.submitted}>
                <span>امتیاز شما به این محصول:</span>
                <Rating value={rating} />
            </div>
            <form className = {styles.form}>
                <label hidden htmlFor = 'product_review_add_rating_form'>امتیاز دهید</label>
                <select id = 'product_review_add_rating_form'
                value = {rating}
                onChange = {(e) => setRating(e.target.value)}
                >
                    <option value = ''>امتیاز دهید (بدون امتیاز)</option>
                    <option value = '5'>۵</option>
                    <option value = '4'>۴</option>
                    <option value = '3'>۳</option>
                    <option value = '2'>۲</option>
                    <option value = '1'>۱</option>

                </select>
            </form>
        </footer>
    );
};

export default Footer;