import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../Bookmarks';
import Navbar from './navbar/Navbar';
import Laptop from './categories/laptop/Laptop';
import Mobile from './categories/mobile/Mobile';
import Arcade from './categories/arcade/Arcade';
import Accessories from './categories/accessories/Accessories';
import Footer from './footer/Footer';
import { getBookmarks, removeAllProducts } from '../../../../../redux/user/bookmarks/actions';


const Small = () => {
    const dispatch = useDispatch();
    const { toggle } = useContext(ToggleContext);
    const [category, setCategory] = useState('');
    const { products } = useSelector(state => state.userBookmarkList);
    const { loading, success, error, message } = useSelector(state => state.userBookmarkRemove);
    const { loading: removeAllLoading, success: removeAllSuccess } = useSelector(state => state.userBookmarkRemoveAll);
    useEffect(() => {
        dispatch(getBookmarks(category));
    }, [category, success, removeAllSuccess]);
    const removeAllHandler = (category) => {
        dispatch(removeAllProducts(category));
    };
    return (
        <div className = {styles.container}>
            
            <Navbar />
            
            <div className={styles.body}>
                
                {toggle.laptop
                ? <Laptop products = {products} onRemove = {removeAllHandler} />
                : toggle.mobile
                ? <Mobile products = {products} onRemove = {removeAllHandler} />
                : toggle.arcade
                ? <Arcade products = {products} onRemove = {removeAllHandler} />
                : <Accessories products = {products} onRemove = {removeAllHandler} />
                }

            </div>

            <Footer setCategory={setCategory} />

        </div>
    );
};

export default Small;