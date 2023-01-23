import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getProductsList } from '../../../redux/products/actions';
import Navbar from './Components/navbar/Navbar';



export const ToggleContext = createContext();
export const QueryDataContext = createContext();
const Laptops = () => {
    const dispatch = useDispatch();
    const { pageNumber } = useParams();
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
        brands: [],
        filteringKeyword: '',
    });
    const [toggle, setToggle] = useState({
        shop: false,
    });
    
    useEffect(() => {
        dispatch(getProductsList(queryData, pageNumber || 1));
    }, [queryData, pageNumber]);
    return (
        <main className = {styles.main}>             
        <QueryDataContext.Provider value = {{ queryData, setQueryData }}>
            <ToggleContext.Provider value = {{ toggle, setToggle }}>
                
                <Navbar />
                
                Landing

            </ToggleContext.Provider> 
        </QueryDataContext.Provider> 
        </main>
    );
};

export default Laptops;