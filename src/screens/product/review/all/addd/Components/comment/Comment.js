import React, { useState } from 'react';
import styles from './styles.module.css';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import Form from './form/Form';


const Comment = () => {
    const [open, setOpen] = useState(false);
    const openCommentForm = () => setOpen(true);
    return (
        <>
        <div className={styles.comment}>
            <button onClick = {openCommentForm}>
                <span>دیدگاه شما</span>
                <div>
                    <span className={styles.no_comment}>دیدگاهی ثبت نشده</span>
                    <CreateRoundedIcon sx={{ fontSize: '1.3rem'}} />
                </div>
            </button>
        </div>
        <Form open = {open} setOpen = {setOpen} />
        </>
    );
};

export default Comment;