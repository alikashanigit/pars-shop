import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../../../Product';
import Rating from './rating/Rating';
import Suggestion from './suggestion/Suggestion';



const Header = ({ review }) => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const closeHandler = () => setToggle({ ...toggle, reviewQuickView: false });
    return (
        <div className={styles.header}>

            <div>
                <button onClick = {closeHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>

            <Rating value = {review.rating} />
            
            <Suggestion value = {review.rating} />

            

        </div>
    );
};

export default Header;