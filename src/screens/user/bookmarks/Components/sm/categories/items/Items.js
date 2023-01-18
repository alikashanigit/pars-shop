import React from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { removeAllProducts, removeProduct } from '../../../../../../../redux/user/bookmarks/actions';
import Item from './item/Item';


const Items = ({ category, products }) => {
    const dispatch = useDispatch();
    const removeHandler = (id) => dispatch(removeProduct(id));
    const removeAllHandler = (id) => dispatch(removeAllProducts(category));
    return (
        <ul className = {styles.items}>
            {products && !products.length
            ? <span className={styles.note}>محصولی اضافه نشده است</span>
            : products?.map(item => <Item item = {item} />)
            }
        </ul>
    );
};

export default Items;