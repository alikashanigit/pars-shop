import React, { createContext, useState } from 'react';
import styles from './styles.module.css';
import { Backdrop } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag } from '../../../../../redux/bag/actions';
import Body from './body/Body';
import Large from './large/Large';
import { product } from './data';


export const DataContext = createContext();
const Shop = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    // const { product, loading } = useSelector(state => state.productDetails);
    const [data, setData] = useState({
        color: '',
        capacity: '',
        qty: 1,
        price: product.minPrice,
    });
    const addToBagHandler = () => {
        dispatch(addToBag({
            product: product._id,
            color: data.color,
            capacity: data.capacity,
            qty: data.qty,
            price: data.price,
        }));
    };
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.shop}>

            <DataContext.Provider value = {{ data, setData }}>

                <Large setToggle={setToggle} />

            </DataContext.Provider>

        </Backdrop>
    );
}

export default Shop;