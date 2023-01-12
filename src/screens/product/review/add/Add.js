import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../../redux/product/actions';
import { addBenefit } from '../../../../redux/product/reviews/product/actions';
import Navbar from './Components/navbar/Navbar';
import Suggestion from './Components/suggestion/Suggestion';
import Footer from './Components/footer/Footer';
import Comment from './Components/comment/Comment';

const Add = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [addedOptions, setAddedOptions] = useState();
    const { loading, success, error, product } = useSelector(state => state.productDetails);   
    useEffect(() => {
        product && !product.name && dispatch(getProductDetails(id));
    }, []);
    return (
        <main className={styles.main}>

            <Navbar name = {product && product.name} id = {product && product._id} />

            <Suggestion />

            <ul className = {styles.features}>
                <li className = {styles.item}>
                    <Link to = ''>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width = '20'
                            height = '20' 
                            fill = '#00d166'
                            class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                            <span>ویژگی‌های مثبت</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width = '16'
                        height = '16' 
                        fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Link>
                    {addedOptions && addedOptions.length > 0 &&
                    <ul className = {styles.list}>
                        
                    </ul>
                    }
                </li>
                <li className = {styles.item}>
                    <Link to = ''>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width = '20'
                            height = '20' 
                            fill = '#ff4444'
                            class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                            </svg>
                            <span>ویژگی‌های منفی</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width = '16'
                        height = '16' 
                        fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Link>
                </li>
            </ul>

            <Comment />

            <Footer />

        </main>
    );
};

export default Add;