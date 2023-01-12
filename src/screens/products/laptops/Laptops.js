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


export const QueryDataContext = createContext();
const Laptops = () => {
    const { pageNumber } = useParams();
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
        brands: [],
        colors: [],
        minPrice: '',
        maxPrice: '',
        types: [],
        screenSizes: [],
        cacheMemories: [],
        interiorMemoryTypes: [],
        cpuModels: [],
        cpuFrequencies: [],
        cpuManufacturers: [],
        gpuManufacturers: [],
        ramModels: [],
        ramCapacities: [],
        resolutions: [],
        batteryTypes: [],
        batteryTypes: [],
        statuses: [],
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsList(queryData, pageNumber));
    }, [queryData, pageNumber]);
    return (
        <main className = {styles.main}>             
        <QueryDataContext.Provider value = {{ queryData, setQueryData }}>
            
            <Navbar />
            
            <Header />

            <Filters />
            
            <Body />

            <Accessories />

            <Footer />

        </QueryDataContext.Provider> 
        </main>
    );
};

export default Laptops;