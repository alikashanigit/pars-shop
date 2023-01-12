import React from 'react';
import List from './list/List';
import styles from './styles.module.css';


const Specs = ({ toggle, setToggle }) => {
    const openFullSpecs = () => setToggle({ ...toggle, fullSpecs: true });
    
    return (
        toggle.specs &&
        <section className = {styles.section}>
            <List />
            <button onClick = {openFullSpecs}>
                بیشتر...
            </button>
        </section>
    );
};

export default Specs;