import React from 'react';
import styles from './styles.module.css';
import Form from './form/Form';
import Submitted from './submitted/Submitted';


const Rating = () => {
    return (
        <div className = {styles.rating}>

            <div className = {styles.container}>

                <Submitted />

                <Form />

            </div>
            
        </div>
    );
};

export default Rating;