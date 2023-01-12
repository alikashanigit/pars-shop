import React from 'react';
import styles from './styles.module.css';


const Benefits = ({ review }) => {
    return (
        <ul className = {styles.list}>
            {review.benefits?.map(item => (
            <li>
                +
                <span>{item}</span>
            </li>
            ))}
        </ul>
    );
};

export default Benefits;