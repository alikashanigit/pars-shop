import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Orders';
import Active from './active/Active';


const Lists = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className = {styles.lists}>
            
            <Active />

        </div>
    );
};

export default Lists;