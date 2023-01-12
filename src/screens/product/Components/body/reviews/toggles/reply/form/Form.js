import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../../../../../../../redux/product/reviews/product/actions';


const Form = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    // const { loading, success, error } = useSelector(state => state.productReviewCommentAdd);
    useEffect(() => {}, [])
    const addCommentHandler = (e) => {
        e.preventDefault();
        dispatch(addComment(id, content));
    }
    return (
        <form className={styles.comment}>
    
            <div>
                <label>پاسخ‌تان را بنویسید</label>
                <textarea id = ''
                placeholder = 'دیدگاه...'
                value = {content}
                onChange = {e => setContent(e.target.value)}
                />
            </div> 

            
            <button onClick = {addCommentHandler}>ثبت کنید</button>    
            

        </form>
    );
};

export default Form;