import React, { useContext } from 'react';
import styles from './styles.module.css';
import Price from './price/Price';
import OldPrice from './price/OldPrice';
import { useSelector } from 'react-redux';
import { ToggleContext } from '../../../../../../../../Order';


const Shopping = () => {
    const { product } = useSelector(state => state.productDetails);
    const { toggle, setToggle } = useContext(ToggleContext);
    return (
        <div className={styles.shopping}>
            <button className = {styles.add_btn}
            onClick = {() => setToggle({ ...toggle, shop: true })}
            >
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" fill="#fff" class="bi bi-plus-lg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                <Price value = {product.minPrice} />
            </button>

            <OldPrice value={product.featured.discount && product.featured.discount.price} />
        </div>
    );
};

export default Shopping;