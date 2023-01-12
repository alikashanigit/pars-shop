import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';


const Submitted = () => {
    const [submitted, setSubmitted] = useState(false);
    // const { product: { reviews: {

    // }} } = useSelector(state => state.productDetails);
    return (

        <div className = {styles.submitted}>
                
            <span>امتیاز شما به این محصول:</span>

            <span>امتیازی نداده‌اید!</span>
        
        </div>

    );
};

export default Submitted;