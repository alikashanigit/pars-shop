import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Form from './form/Form';


const Comment = () => {
    const [open, setOpen] = useState(false);
    const openCommentForm = () => setOpen(true);
    const dispatch = useDispatch();
    return (
        <>
        <div className={styles.comment}>
            <button onClick = {openCommentForm}>
                <span>دیدگاه شما</span>
                <div>
                    <span>دیدکاهی ثبت نشده</span>
                    <CreateRoundedIcon />
                </div>
            </button>
        </div>
        <Form open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Comment;