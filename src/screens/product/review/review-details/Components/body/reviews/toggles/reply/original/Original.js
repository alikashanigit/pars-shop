import React from 'react';
import styles from './styles.module.css';


const Original = ({ comment, fullName }) => {
    return (
        <div className = {styles.original}>
            <div>
                <span>دیدگاه</span>            
                <span className = {styles.user}>{fullName}</span>
            </div>
            <p>{comment}</p>
        </div>
    );
};

export default Original;