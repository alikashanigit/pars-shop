import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProductDetails } from '../../../../redux/product/actions';
import { getReviews } from '../../../../redux/product/reviews/actions';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import List from './Components/list/List';


export const ToggleContext = createContext();
export const QueryDataContext = createContext();
const All = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [toggle, setToggle] = useState({
        search: false,
    });
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
        
    });
    const { product } = useSelector(state => state.productDetails);
    
    useEffect(() => {
        dispatch(getProductDetails(id))
    }, [id]);
    useEffect(() => {
        dispatch(getReviews(id, queryData))
    }, [queryData]);
    return (
        <main className = {styles.main}>
        <QueryDataContext.Provider value = {{ queryData, setQueryData }}>
            <ToggleContext.Provider value = {{ toggle, setToggle }}>
                <Navbar />

                <Header />

                <List />

                <Footer />
            </ToggleContext.Provider>
        </QueryDataContext.Provider>
        </main>
    );
};

export default All;