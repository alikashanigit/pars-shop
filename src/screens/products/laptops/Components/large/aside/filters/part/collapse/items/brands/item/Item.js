import React, { useContext } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../../../../../../../../Laptops';
import { FiltersContext } from '../../../../../Filters';


const Item = ({ part, id, name, nameEn, logo }) => {
    const { queryData } = useContext(QueryDataContext);
    const { filterHandler } = useContext(FiltersContext);
    const brands = queryData.brands;
    const itemSelected = brands && brands.find(i => i === name);
    return (
        <li className={styles.item}>
            <label onClick = {() => filterHandler(part, name)} htmlFor = {`products_filters_brands_${id}`}>
                <div>
                    <div className={styles.item_container}>
                        <span className = {styles.item_icon}
                        id = {itemSelected ? styles.item_selected : ''}
                        >

                        </span>
                    </div>
                    <div className = {styles.names}>
                        <span className = {styles.name_fa}>
                            {name}
                        </span>
                        <span className = {styles.name_en}>
                            {nameEn}
                        </span>
                    </div>
                </div>
                <div className=''>
                    {logo}
                </div>
            </label>
        </li>    
    );
};

export default Item;