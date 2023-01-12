import React from 'react';
import styles from './styles.module.css';
import Photos from './photos/Photos';
import Ratings from './ratings/Ratings';
import Features from './features/Features';
import Sizes from './sizes/Sizes';
import Parts from './parts/Parts';
import Related from './related/Related';


const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Photos />
            
            <Ratings />
            
            <Sizes />

            <Features />

            <Parts />

            <Related />
            
        </div>
    );
};

export default Body;