import React, { useContext } from 'react';
import styles from './styles.module.css';
import Header from './header/Header';
import Comment from './comment/Comment';
import Reactions from './reactions/Reactions';
import { useDispatch, useSelector } from 'react-redux';
// import { reviews } from '../../../QuickView';
import { useParams } from 'react-router';
import { ToggleContext } from '../../../../../../../../Product';
import { getReviewDetails } from '../../../../../../../../../../../redux/product/reviews/actions';
import { reviews } from '../../../../../list/List';


const Item = ({ item }) => {
    const dispatch = useDispatch(); 
    const { id } = useParams();
    const { setToggle } = useContext(ToggleContext);
    // const { reviews } = useSelector(state => state.productReviewList);
    const currentReview = reviews && reviews.find(i => i._id === item._id);
    const openDetails = (reviewId) => {
        dispatch(getReviewDetails(id, reviewId));
        setToggle({ reviewQuickView: true });
    };
    return (
        <div key = {item._id} className={styles.item}>
        
            <button onClick = {() => openDetails(item._id)}>
                
                <Header currentReview = {currentReview} />

                <Comment currentReview = {currentReview.comment} />

            </button>

            <Reactions review = {currentReview} reviewId = {currentReview._id} />
        
        </div>
    );
};

export default Item;