import React, { createContext, useContext } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../../../Laptops';
import Part from './part/Part';
import Brands from './part/collapse/items/brands/Brands';


export const FiltersContext = createContext();
const Filters = () => {
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
            <div className={styles.header}>
                <span>فیلترها</span>
                <button>حذف فیلترها</button>
            </div>
            <FiltersContext.Provider value = {{ filterHandler }}>
                <Part partTitle = 'brands' title = 'برند' id = 'brands' partList = {queryData.brands} >
                    <Brands part = 'brands' partList = {queryData.brands} />
                </Part>               
            </FiltersContext.Provider>
        </ul>      
    );
};

export default Filters;