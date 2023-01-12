import React from 'react';
import styles from './styles.module.css';


const Comment = ({ setReviewsToggle }) => {
    return (
        <button onClick = {() => setReviewsToggle({ reviewDetails: true })}>
            <p className={styles.comment}>
                نظر کاربر.......
            </p>
        </button>
    );
};

export default Comment;