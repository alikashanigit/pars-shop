import React from 'react';
import Body from './body/Body';
import List from './list/List';
import styles from './styles.module.css';


const Reviews = ({ toggle, setToggle }) => {
    const openFullReviews = () => setToggle({ ...toggle, fullReviews: true });
    return (
        toggle.reviews &&
        <section className = {styles.section}>
            <Body />
        </section>
    );
};

export default Reviews;