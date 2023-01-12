import React from 'react';
import styles from './styles.module.css';


const Disadvantages = ({ review }) => {
    return (
        <ul className = {styles.list}>
            {review.disadvantages?.map(item => (
            <li>
                -
                <span>{item}</span>
            </li>
            ))}
        </ul>
    );
};

export default Disadvantages;