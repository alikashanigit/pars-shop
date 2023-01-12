import React, { useState } from 'react';
import styles from './styles.module.css';


const Suggestion = ({ currentReview }) => {
    const [isSuggest, setIsSuggest] = useState('پیشنهاد نمی‌شود');

    return (
        <div className = {styles.suggestion}>
            {isSuggest === 'پیشنهاد می‌شود'
            ? <span className = {styles.suggested}>پیشنهاد می‌شود</span> 
            : isSuggest === 'پیشنهاد نمی‌شود'
            ? <span className = {styles.not_suggested}>پیشنهاد نمی‌شود!</span>
            : ''
            }
        </div>
    );
};

export default Suggestion;