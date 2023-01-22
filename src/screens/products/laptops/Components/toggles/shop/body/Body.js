import React from 'react';
import styles from './styles.module.css';
import Colors from './colors/Colors';
import Capacities from './capacities/Capacities';
import Qty from './qty/Qty';
import Price from './price/Price';



const Body = () => {
    return (
        <div className = {styles.body}>
            
            <Colors />
           
            <div>
                
                <Capacities />

                <Qty />

                <Price />
           
            </div>

        </div>
    );
}

export default Body;