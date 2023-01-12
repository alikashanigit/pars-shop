import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


const Info = ({ item }) => {
    return (
        <div className = {styles.info}>
            
    
            <Link className = {styles.name} 
            to = {`product/${item.id}`}
            >
                {item.name}
            </Link>

            <div className = {styles.cat_brand}>
                <button className = {styles.brand}>
                    {item.brand}
                </button>    
                <button className = {styles.category}>
                    <span>لوازم جانبی</span>
                    <span>{item.category}</span>
                </button>

            </div>
            
        </div>
    );
};

export default Info;