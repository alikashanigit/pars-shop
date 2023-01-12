import React, { useState } from 'react';
import ExpertCheck from './expert-check/ExpertCheck';
import Header from './header/Header';
import QA from './qa/QA';
import Reviews from './reviews/Reviews';
import Specs from '../features/specs/full/FullSpecs';
import styles from './styles.module.css';


const Parts = () => {
    const [toggle, setToggle] = useState({
        specs: true,
        fullSpecs: false,
        expertCheck: false,
        fullExpertCheck: false,
        reviews: false,
        fullReviews: false,
        qa: false,
        fullQA: false,
    });
    return (
        <div className = {styles.parts}>
            <Header toggle = {toggle} setToggle= {setToggle} />
            <Specs toggle = {toggle} />
            <ExpertCheck toggle = {toggle} />
            <Reviews toggle = {toggle} />
            <QA toggle = {toggle} />
        </div>
    );
};

export default Parts;