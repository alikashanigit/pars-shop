import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownAltRoundedIcon from '@mui/icons-material/ThumbDownAltRounded';
import { dislike, like } from '../../../../../../redux/product/reviews/reactions/comment/actions';
import { removeComment } from '../../../../../../redux/product/reviews/product/actions';
import { useDispatch } from 'react-redux';
import { ToggleContext } from '../../All';
import Menu from './menu/Menu';


export const reviews = [
    {
        _id: 1,
        user: { fullName: 'مهتاب همتی'},
        createdAt: '۱۲ مهر ۱۴۰۱ ۲۳:۱۵',
        rating: 4,
        comment: 'بسیار خوش دست و سبک چند ماه است که برای همسرم خریدم و در حال استفاده است سرعت و کارکرد خوبی دارد در این رنج قیمت بسیار خوب است',
        suggestion: true,
        likes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        dislikes: [, 'r', 'a', 's'],
        replies: [],
    },
    {
        _id: 2,
        user: { fullName: 'مهتاب همتی'},
        createdAt: '۱۲ مهر ۱۴۰۱ ۲۳:۱۵',
        rating: 4.5,
        comment: 'بسیار خوش دست و سبک چند ماه است که برای همسرم خریدم و در حال استفاده است سرعت و کارکرد خوبی دارد در این رنج قیمت بسیار خوب است',
        suggestion: true,
        likes: ['a', 'a', 's'],
        dislikes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        replies: ['r', 'a', 's'],
    },
    {
        _id: 3,
        user: { fullName: 'مهتاب همتی'},
        createdAt: '۱۲ مهر ۱۴۰۱ ۲۳:۱۵',
        rating: 3.5,
        comment: 'بسیار خوش دست و سبک چند ماه است که برای همسرم خریدم و در حال استفاده است سرعت و کارکرد خوبی دارد در این رنج قیمت بسیار خوب است',
        suggestion: false,
        likes: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
        dislikes: ['c', 'd', 'r', 'a', 's'],
        replies: ['a', 'b', 'c', 'd', 'r', 'a', 's'],
    },
];

const List = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { toggle, setToggle } = useContext(ToggleContext);
    const likeHandler = (reviewId) => {
        dispatch(like(id, reviewId));
    };
    const dislikeHandler = (reviewId) => {
        dispatch(dislike(id, reviewId));
    };
    const removeCommentHandler = (reviewId) => {
        dispatch(removeComment(id, reviewId));
    };
    return (
        <ul className = {styles.list}>
            {reviews?.map(item => (
            <li key = {item._id} className={styles.item}>
                <div className={styles.item_header}>
                    <span className={styles.user_name}>{item.user.fullName}</span>
                    <span className={styles.date}>{item.createdAt}</span>
                </div>
                <p>{item.comment}</p>
                <ul className={styles.reactions}>
                    <div>
                        <li>
                            <button onClick = {() => likeHandler(item._id)}>
                                <ThumbUpRoundedIcon style={{ fontSize: '1.2rem'}} />
                                <span className={styles.badge}>{item.likes.length}</span>
                            </button>
                        </li>
                        <li>
                            <button onClick = {() => dislikeHandler(item._id)}>
                                <ThumbDownAltRoundedIcon style={{ fontSize: '1.2rem'}} />
                                <span className={styles.badge}>{item.dislikes.length}</span>
                            </button>
                        </li>
                    </div>
                    <li>
                        <Menu item = {item} onRemove = {removeCommentHandler} />
                    </li>
                </ul>
                
            </li>
            ))}
        </ul>
    );
};

export default List;