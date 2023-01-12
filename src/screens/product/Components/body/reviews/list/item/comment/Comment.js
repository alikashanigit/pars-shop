import React from 'react';
import styles from './styles.module.css';


const Comment = ({ setReviewsToggle, comment }) => {
    return (
        <button onClick = {() => setReviewsToggle({ reviewDetails: true })}>
            <p className={styles.comment}>
                {/* {comment} */}
                کیفیت بسیار خوبی داره و البته قیمت بسیار مناسب.
            </p>
        </button>
    );
};

export default Comment;