import React, { createContext, useContext } from 'react';
import styles from './styles.module.css';
import Part from './part/Part';
import Brands from './brands/Brands';
import { QueryDataContext } from '../../../../Laptops';

export const FiltersContext = createContext();
const Container = () => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    const filterHandler = (part, name) => {
        const itemExists = queryData.brands && queryData.brands.find(item => item === name) || false;
        itemExists 
        ? setQueryData({ 
            ...queryData,
            [part]: queryData[part].filter(item => item !== name),
        })
        : setQueryData({ 
            ...queryData,
            [part]: [...queryData[part], name],
        });
    };
    return (
        <ul className={styles.list}>
            <FiltersContext.Provider value = {{ filterHandler }}>
                <Part partTitle = 'brands' title = 'برند' id = 'brands' partList = {queryData.brands} >
                    <Brands part = 'brands' partList = {queryData.brands} />
                </Part>               
            </FiltersContext.Provider>
        </ul>      
    );
};

export default Container;