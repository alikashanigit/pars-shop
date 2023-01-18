import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../../Orders';
import { getDeliveredOrders } from '../../../../../../redux/user/orders/actions';
import Item from './item/Item';


const Delivered = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
    });
    const { orders } = useSelector(state => state.userOrderDeliveredList);
    useEffect(() => {
        // !!! MEMO ???
        dispatch(getDeliveredOrders(queryData));
    }, []);
    return (
        <ul className = {styles.list}>
            {orders?.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default Delivered;