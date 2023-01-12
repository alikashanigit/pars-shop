import React, { useContext } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import { QueryDataContext } from '../../../All';
import Navbar from './navbar/Navbar';
import Body from './body/Body';


const Search = ({ open }) => {
    const { queryData, setQueryData } = useContext(QueryDataContext);

    return (
        <Backdrop id = {styles.backdrop} open = {open}>
            <div className = {styles.container}>

                <Navbar />

                <Body queryData = {queryData} setQueryData = {setQueryData} />

            </div>
        </Backdrop>
    );
};

export default Search;