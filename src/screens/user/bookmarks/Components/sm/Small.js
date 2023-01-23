import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../Bookmarks';
import { getBookmarks, removeAllProducts } from '../../../../../redux/user/bookmarks/actions';
import Lists from './lists/Lists';
import Footer from './footer/Footer';


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
            
            
            <div className={styles.body}>
                
                <Lists />

            </div>

            <Footer setCategory={setCategory} />

        </div>
    );
};

export default Small;