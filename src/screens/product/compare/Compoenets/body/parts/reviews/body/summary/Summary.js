import React from 'react';
import styles from './styles.module.css';
import Rating from './Rating';
import Container from './container/Container';



const Summary = () => {
    return (
        <div className={styles.summary}>
            
            <div className = {styles.rating}>
                <Rating />
                <span>۵۶ خریدار</span>
            </div>

            <Container />
            
        </div>
    );
};

export default Summary;