import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Reviews';
import Waiting from './waiting/Waiting';


const Lists = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className = {styles.lists}>
            
            <Waiting />

        </div>
    );
};

export default Lists;