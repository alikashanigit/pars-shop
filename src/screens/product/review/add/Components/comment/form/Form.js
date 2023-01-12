import React, { useState } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import { addComment } from '../../../../../../../redux/product/reviews/product/actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';


const review = {
    likes: [1,2,3,4],
    dislikes: [1,4],
};
const Form = ({ open, setOpen }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const closeHandler = () => setOpen(false);
    const addCommentHandler = (e) => {
        e.preventDefault();
        comment && dispatch(addComment(id, comment));
    };
    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span>دیدگاه شما</span>
                    <button onClick={closeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="15" height="15" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.details}>
                    <div>
                        <ThumbUpRoundedIcon />
                        <span>{review.likes.length}</span>
                    </div>
                    <div>
                        <ThumbDownAltRoundedIcon />
                        <span>{review.dislikes.length}</span>
                    </div>
                </div>
                <form className = {styles.form}>
                    <label htmlFor='product_review_add_comment_form'>نظرتان را بنویسید</label>
                    <textarea id = '' placeholder = '' 
                    value = {comment}
                    onChange = {e => setComment(e.target.value)}
                    />
                    <button onClick={addCommentHandler}>
                        ثبت نظر
                    </button>
                </form>
            </div>
        </Backdrop>
    );
};

export default Form;