import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../../Product';
import Sizes from './sizes/Sizes';
import { saveProduct } from '../../../../../redux/product/actions';
import { useParams } from 'react-router';
import { product } from '../../../data';


const Bar = () => {
    const dispatch = useDispatch();
    const { toggle, setToggle } = useContext(ToggleContext)
    const { id } = useParams();
    // const { product } = useSelector(state => state.productDetails);
    const isSaved = false;
    const saveHandler = () => {
        !isSaved && dispatch(saveProduct(id))
    }
    return (
        <header className = {styles.header}>
            
            <div className = {styles.shop_info}>
                <Sizes />
                <div>
                    <button onClick={() => setToggle({ ...toggle, shop: true })}>
                        سفارش دهید
                    </button>
                </div>
            </div>

            <div className = {styles.product_info}>
                <div className = {styles.photo}>
                    <img alt={product && product.name} src = {product.cover}/>
                </div>
                <div>
                    <span className={styles.name}>{product.name}</span>
                    <ul className={styles.menu}>
                        
                        <li className={styles.item}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width = '16'
                                height = '16' 
                                fill = 'currentColor'
                                class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                                </svg>
                            </button>
                        </li>
                        
                        <li className={styles.item}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                width = '16'
                                height = '16' 
                                fill = 'currentColor'
                                class="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                </svg>
                            </button>
                        </li>


                        <li className={styles.item}>
                            <button onClick={() => setToggle({ ...toggle, fullSpecs: true })}>مشخصات</button>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Bar;