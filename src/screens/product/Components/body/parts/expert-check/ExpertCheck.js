import React from 'react';
import styles from './styles.module.css';
import List from './list/List';
import Body from './body/Body';


const ExpertCheck = ({ toggle, setToggle }) => {
    const openFullExpertCheck = () => setToggle({ ...toggle, expertCheck: true });
    
    return (
        toggle.expertCheck &&
        <section className = {styles.section}>
            <Body />
        </section>
    );
};

export default ExpertCheck;