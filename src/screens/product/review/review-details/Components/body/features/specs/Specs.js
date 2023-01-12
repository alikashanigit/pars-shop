import React, { useState } from 'react';
import FullSpecs from './full/FullSpecs';
import styles from './styles.module.css';


const Specs = () => {
    const [open, setOpen] = useState(false);
    const openFullSpecs = () => setOpen(true);
    return (
        <>
        <div className={styles.specs}>
            <button onClick = {openFullSpecs}>مشخصات کامل</button>
        </div>
        <FullSpecs setOpen = {setOpen} open = {open} />
        </>
    );
};

export default Specs;