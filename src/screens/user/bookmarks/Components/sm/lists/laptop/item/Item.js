import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Photo from './photo/Photo';
import Info from './info/Info';
import { useDispatch } from 'react-redux';
import { unsaveProduct } from '../../../../../../../../redux/product/actions';


const Item = ({ item }) => {
    const dispatch = useDispatch();
    const unsaveHandler = () => dispatch(unsaveProduct(item._id));
    return (
        <li key = {item.name} className={styles.item} title = {item.name}>
                        
            <div>
                <button onClick={unsaveHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '25'
                    height = '25' 
                    fill = 'currentColor'
                    class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </button>
            </div>
            
            <Link className = {styles.link} to = {`/product/${item._id}`}>
                <Info item = {item} />
                <Photo item = {item} />
            </Link>

        </li>
    );
};

export default Item;