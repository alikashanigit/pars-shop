import React from 'react';
import styles from './styles.module.css';
import Colors from './colors/Colors';
import Capacities from './capacities/Capacities';
import Qty from './qty/Qty';
import Price from './price/Price';
import Photos from './photos/Photos';



const Large = ({ setToggle }) => {
    return (
        <div className = {styles.large}>

            <div className={styles.header}>
                <span>خرید محصول</span>
                <button onClick={() => setToggle({ shop: false })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
            </div>
            
            <div>

                <Photos />
            
                <div>

                    <Colors />
                    
                    <Capacities />

                    <Qty />

                    <Price />
            
                </div>

            </div>

        </div>
    );
}

export default Large;