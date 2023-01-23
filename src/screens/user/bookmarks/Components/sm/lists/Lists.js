import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Bookmarks';
import Laptop from './laptop/Laptop';


const Lists = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className = {styles.lists}>
            
            <Laptop />

        </div>
    );
};

export default Lists;