import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';


const Info = ({ item }) => {
    return (
        <div className = {styles.info}>
            
            <div className = {styles.top_info}>
                <Link className = {styles.name} to = {`/product/${item.id}`}>
                    {item.name}
                </Link>
                <button className = {styles.brand}>
                    {item.brand}
                </button>
            </div>

            <div className = {styles.cat_brand}>
                
                <button className = {styles.category}>
                    {/* <span>لوازم جانبی</span> */}
                    <span>{item.type}</span>
                </button>

                <div className = {styles.features}>
                    {item.colors?.map(item => <span key={item.code} style={{ backgroundColor: item.code }}></span>)}
                </div>
                

            </div>
            
        </div>
    );
};

export default Info;