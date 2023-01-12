import React from 'react';
import List from './list/List';
import styles from './styles.module.css';


const QA = ({ toggle, setToggle }) => {
    const openFullQA = () => setToggle({ ...toggle, fullQA: true });
    
    return (
        toggle.qa &&
        <section className = {styles.section}>
            <List />
            <button onClick = {openFullQA}>
                بیشتر...
            </button>
        </section>
    );
};

export default QA;