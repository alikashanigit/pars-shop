import React, { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../redux/product/actions';
import Navbar from './Components/navbar/Navbar';
import Body from './Components/body/Body';
import Footer from './Components/footer/Footer';
import Bar from './Components/large-screen/bar/Bar';
import Shop from './Components/toggles/shop/Shop';
import { product } from './data';


export const ToggleContext = createContext();
const Product = () => {
    const { id } = useParams();
    const [toggle, setToggle] = useState({
        shop: false,
        compare: false,
        fullSpecs: false,
        replyComment: false,
        reviewQuickView: false,
    })
    // const { product } = useSelector(state => state.productDetails);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [])
    return (
        <main className = {styles.main}>             
        <ToggleContext.Provider value = {{ toggle, setToggle }}>

            <Navbar />
            
            <Bar />

            <span className = {styles.name}>{product && product.name}</span>
            
            <Body />

            <Footer />

            <Shop toggle={toggle} setToggle = {setToggle} />
            
        </ToggleContext.Provider>
        </main>
    );
};

export default Product;