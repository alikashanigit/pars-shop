import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { addComment } from '../../../../';


const Comment = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [guestInfo, setGuestInfo] = useState({});
    const dispatch = useDispatch();
    // const { loading, success, error } = useSelector(state => state.productReviewCommentAdd);
    // useEffect(() => {}, [])
    // const addCommentHandler = () => {
    //     dispatch(addComment(id, content, guestInfo));
    // }
    return (
        <form className={styles.comment}>
    
            <div>
                <label>دیدگاه‌تان را بنویسید</label>
                <textarea id = ''
                placeholder = 'دیدگاه...'
                value = {content}
                onChange = {e => setContent(e.target.value)}
                />
            </div> 

            <div className={styles.recommend}>
                <label htmlFor=''>به دیگران پیشنهاد می‌کنید؟</label>
                <select id = '' value = {''}>
                    <option value=''>پیشنهاد میکنم</option>
                    <option value=''>پیشنهاد نمی‌کنم</option>
                </select>
            </div>
            
            <button>ثبت کنید</button>    
            

        </form>
    );
};

export default Comment;