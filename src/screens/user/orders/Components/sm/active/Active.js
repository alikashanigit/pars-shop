import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../../Orders';
import { getActiveOrders } from '../../../../../../redux/user/orders/actions';
import Item from './item/Item';


const Active = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
    });
    const { orders } = useSelector(state => state.userOrderActiveList);
    useEffect(() => {
        // !!! MEMO ???
        dispatch(getActiveOrders(queryData));
    }, []);
    const fakeOrders = [1,2,3,4]
    return (
        <ul className = {styles.list}>
            {fakeOrders?.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default Active;