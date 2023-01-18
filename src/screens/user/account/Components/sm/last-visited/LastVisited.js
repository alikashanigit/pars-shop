import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import List from './list/List';
import { getLastVisited } from '../../../../../../redux/user/account/actions';


const LastVisited = () => {
    const dispatch = useDispatch();
    // const { products } = useSelector(state => state.userLastVisited);
    useEffect(() => {
        dispatch(getLastVisited());
    }, []);
    return (
        <ul className = {styles.last_visited}>
            <span>آخرین محصولات دیده شده</span>
            <List 
            // products = {products}
            />
        </ul>
    );
};

export default LastVisited;