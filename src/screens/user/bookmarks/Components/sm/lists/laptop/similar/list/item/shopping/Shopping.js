import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch } from 'react-redux';
import { ToggleContext } from '../../../../../../../../Bookmarks';
import { getProductDetails } from '../../../../../../../../../../../redux/product/actions';
import Price from './price/Price';
import OldPrice from './price/OldPrice';


const Shopping = ({ item }) => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext);
    const openShop = (id) => {
        id && dispatch(getProductDetails(id));
        setToggle({
            ...toggle,
            shop: true,
        });
    };
    return (
        <div className={styles.shopping}>
            
            <button className = {styles.add_btn} onClick = {() => openShop(item._id)}>
                <span>خرید</span>
            </button>
            
            <div className={styles.price}>
                <span>از</span>
                <Price value = {item.price} />
            </div>

            {item.featured && item.featured.discount && <OldPrice value = {item.minPrice} />}
            
        </div>
    );
};

export default Shopping;