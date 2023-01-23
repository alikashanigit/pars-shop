import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../../../redux/product/actions';
import Navbar from './Components/navbar/Navbar';
import Suggestion from './Components/suggestion/Suggestion';
import Footer from './Components/footer/Footer';
import Comment from './Components/comment/Comment';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';


const Add = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [addedOptions, setAddedOptions] = useState();
    const { loading, success, error, product } = useSelector(state => state.productDetails);   
    useEffect(() => {
        product && !product.name && dispatch(getProductDetails(id));
    }, []);
    const openFeatures = () => {

    }
    return (
        <main className={styles.main}>

            <Navbar name = {product && product.name} id = {product && product._id} />

            <Suggestion />

            <div className = {styles.features}>
                <button onClick={openFeatures}>
                    <div>
                        <span>ویژگی‌های مثبت و منفی</span>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width = '14'
                            height = '14' 
                            fill = '#00d166'
                            class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                            <span className={styles.slash}>/</span>
                            <svg xmlns="http://www.w3.org/2000/svg" 
                            width = '14'
                            height = '14' 
                            fill = '#ff5555'
                            class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                            </svg>
                        </div>
                    </div>
                    <CreateRoundedIcon sx={{ fontSize: '1.3rem'}} />
                </button>
                {addedOptions && addedOptions.length > 0 &&
                <ul className = {styles.list}>
                    <li>s</li>    
                </ul>
                }
            </div>

            <Comment />

            <Footer />

        </main>
    );
};

export default Add;