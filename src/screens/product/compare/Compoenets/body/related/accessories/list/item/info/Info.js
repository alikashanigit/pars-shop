import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Info = ({ item }) => {
    return (
        <div className = {styles.info}>
            
            <div className = {styles.top_info}>
                <Link className = {styles.name} to = {`product/${item.id}`}>
                    {item.name}
                </Link>
                <button className = {styles.brand}>
                    {item.brand}
                </button>
            </div>

            <div className = {styles.cat_brand}>
                
                <button className = {styles.category}>
                    <span>لوازم جانبی</span>
                    <span>{item.subCategory}</span>
                </button>

            </div>
            
        </div>
    );
};

export default Info;