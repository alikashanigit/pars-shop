import React from 'react';
import Benefits from './benefits/Benefits';
import Disadvantages from './disadvantages/Disadvantages';
import styles from './styles.module.css';


const Body = ({ review }) => {
    return (
        <div className = {styles.body}>
            
            <p>{review.comment}</p>

            <Benefits review={review}/>
            <Disadvantages review={review}/>

        </div>
    );
};

export default Body;