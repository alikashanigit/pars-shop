import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getProductsList } from '../../../redux/products/actions';
import Navbar from './Components/navbar/Navbar';
import Header from './Components/header/Header';
import Filters from './Components/filters/Filters';
import Body from './Components/body/Body';
import Accessories from './Components/accessories/Accessories';
import Footer from './Components/footer/Footer';
import Large from './Components/large/Large';
import Shop from './Components/toggles/shop/Shop';



export const QueryDataContext = createContext();
export const ToggleContext = createContext();
const Laptops = () => {
    const { pageNumber } = useParams();
    const { type } = useParams();
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
        brands: [],
        filteringKeyword: '',
    });
    const [toggle, setToggle] = useState({
        shop: false,
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsList(queryData, pageNumber || 1));
    }, [queryData, pageNumber]);
    return (
        <main className = {styles.main}>             
        <QueryDataContext.Provider value = {{ queryData, setQueryData }}>
            <ToggleContext.Provider value = {{ toggle, setToggle }}>
                
                <Navbar />
                
                <div className = {styles.sm}>
                    
                    <span>لپتاپ‌ها</span>


                    <Filters />
                    
                    <Body />

                    <Accessories />

                    <Footer />
                    
                </div>

                <Large />



                <Shop toggle = {toggle} setToggle = {setToggle} />

            </ToggleContext.Provider> 
        </QueryDataContext.Provider> 
        </main>
    );
};

export default Laptops;