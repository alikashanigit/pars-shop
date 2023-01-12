import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { ToggleContext } from '../../../../../../Product';
import { dislike, like } from '../../../../../../../../redux/product/reviews/reactions/comment/actions';
import { getReviewDetails } from '../../../../../../../../redux/product/reviews/actions';
import Item from './item/Item';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';

const Reactions = ({ review }) => {
    
    const { setToggle } = useContext(ToggleContext);
    const { id } = useParams();
    
    const dispatch = useDispatch();
    
    const likeHandler = () => {
        dispatch(like(id, review._id));
    };

    const dislikeHandler = () => {
        dispatch(dislike(id, review._id))
    };
    
    const openReply = () => {
        dispatch(getReviewDetails(id, review._id));
        setToggle({ replyComment: true })
    };

    return (
        <div className = {styles.reactions}>
            
            <ul>
                <li>
                    <button onClick = {() => likeHandler(review._id)}>
                        <ThumbUpRoundedIcon style={{ fontSize: '1.2rem'}} />
                        <span className={styles.badge}>{review.likes.length}</span>
                    </button>
                </li>
                <li>
                    <button onClick = {() => dislikeHandler(review._id)}>
                        <ThumbDownAltRoundedIcon style={{ fontSize: '1.2rem'}} />
                        <span className={styles.badge}>{review.dislikes.length}</span>
                    </button>
                </li>
            </ul>

            <div className = {styles.report}>
                <Link to = ''
                // to = {`review/${review._id}/report`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width="12" height="12" fill="#666" class="bi bi-flag-fill" viewBox="0 0 16 16">
                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                    </svg>
                </Link>
            </div>
            
        </div>
    );
};

export default Reactions;