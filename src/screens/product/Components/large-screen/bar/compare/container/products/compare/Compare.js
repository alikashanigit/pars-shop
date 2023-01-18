import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from '../../../../../../../../../redux/products/actions';


const CompareProducts = () => {
    const dispatch = useDispatch();
    const [compareData, setCompareData] = useState({
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
        statuses: [] // used(secondhand), stock, صفر

    });
    const { products } = useSelector(state => state.productList);
    useEffect(() => {
        dispatch(getProductsList(compareData));
    }, []);       
    const addProductHandler = (id) => {
        
        dispatch({
            type: 'PRODUCT_COMPARE_ADD',
            payload: id,
        })
        
    };
    return (
        <div className={styles.compare_products}>
            <span>محصولات قابل مقایسه</span>
            <ul className={styles.list}>
                {products?.map(item => (
                <li onClick={() => addProductHandler(item._id)}>
                    
                    <img alt = {item.name} src = {item.cover}/>         
                    <span>{item.name}</span>
                    
                </li>
                ))}
            </ul>
        </div>
    );
};

export default CompareProducts;