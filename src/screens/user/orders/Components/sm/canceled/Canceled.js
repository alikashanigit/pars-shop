import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../../Orders';
import { getCanceledOrders } from '../../../../../../redux/user/orders/actions';
import Item from './item/Item';


const Canceled = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
    })
    const { orders } = useSelector(state => state.userOrderCanceledList);
    // const orders = [3,4];
    useEffect(() => {
        // !!! MEMO ???
        dispatch(getCanceledOrders(queryData));
    }, []);
    return (
        <ul className = {styles.list}>
            {orders?.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default Canceled;