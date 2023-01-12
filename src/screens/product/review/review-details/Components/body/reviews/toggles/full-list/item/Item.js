import React from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import SubHeader from './sub-header/SubHeader';
import Comment from './comment/Comment';
import ReplyActions from './reply-actions/ReplyActions';


const Item = ({ setReviewsToggle }) => {
    return (
        <div className={styles.item}>
            <button onClick = {() => setReviewsToggle({ reviewDetails: true })}>
                <SubHeader />
                <Header />
                <Comment />
            </button>
            <ReplyActions setReviewsToggle = {setReviewsToggle} />
        </div>
    );
};

export default Item;