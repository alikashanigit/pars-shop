import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../../Orders';
import { getReturnedOrders } from '../../../../../../redux/user/orders/actions';
import Item from './item/Item';


const Returned = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);
    const [queryData, setQueryData] = useState({
        sort: 'newest-up',
        keyword: '',
    });
    const { orders } = useSelector(state => state.userOrderReturnedList);
    useEffect(() => {
        // !!! MEMO ???
        dispatch(getReturnedOrders(queryData));
    }, []);
    return (
        <ul className = {styles.list}>
            {orders?.map(item => <Item item = {item} />)}
        </ul>
    );
};

export default Returned;