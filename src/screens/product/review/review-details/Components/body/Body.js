import React from 'react';
import styles from './styles.module.css';
import Photos from './photos/Photos';
import Ratings from './ratings/Ratings';
import Features from './features/Features';
import Related from './related/Related';
import Reviews from './reviews/Reviews';
import Options from './options/Options';


const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Photos />
            
            <Ratings />
            
            <Options />

            <Features />

            <Reviews />

            <Related />
            
        </div>
    );
};

export default Body;