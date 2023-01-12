import React from 'react';
import { useDispatch } from 'react-redux';
import { saveProduct, unsaveProduct } from '../../../../../../../../redux/product/actions';
import Discount from './discount/Discount';
import MenuContainer from './menu/Menu';
import styles from './styles.module.css';


const Header = ({ item }) => {
    const dispatch = useDispatch();
    const alreadySaved = false;
    const saveHandler = () => {
        !alreadySaved && dispatch(saveProduct(item._id));
    };
    const unsaveHandler = () => {
        alreadySaved && dispatch(unsaveProduct(item._id));
    };
    const BookmarkActions = () => alreadySaved
        ? <button onClick = {saveHandler}>
             <svg xmlns="http://www.w3.org/2000/svg" 
        width="20" height="20" fill="currentColor" class="bi bi-bookmark-dash-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zM6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
        </svg>
        </button>
        : <button onClick = {unsaveHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            width = '20'
            height = '20' 
            fill = 'currentColor'
            class="bi bi-bookmark-plus" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
            </svg>
        </button>

    return (
        <div className = {styles.header}>

            <BookmarkActions />

            <MenuContainer />

            <Discount />

        </div>
    );
};

export default Header;