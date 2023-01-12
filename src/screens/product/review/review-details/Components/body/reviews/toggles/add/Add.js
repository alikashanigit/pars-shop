import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { Backdrop } from '@mui/material';
import Header from './header/Header';
import Body from './body/Body';
import { ToggleContext } from '../../../../../Product';



const Add = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);

    return (
        <Backdrop id ={styles.backdrop} open = {toggle.reviews.add}>
            <div className={styles.add}>

                <Header toggle = {toggle} setToggle = {setToggle} /> 
                    
                <Body />

            </div>
        </Backdrop>
    );
};

export default Add;