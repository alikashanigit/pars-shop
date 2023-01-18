import React from 'react';
import styles from './styles.module.css';
import { usePageTitle } from '../../../hooks/custom';
import Header from './Components/header/Header';
import Items from './Components/items/Items';
import ShippingInfo from './Components/shipping-info/ShippingInfo';
// import Price from '../Components/footer/price/Price';
import Footer from './Components/footer/Footer';
import Navbar from './Components/navbar/Navbar';


const Result = () => {
    usePageTitle('گزارش پرداخت سفارش');
    return (
        <main className = {styles.main}>
            <div className={styles.container}>
                
                <Navbar />

                <Header />
                
                <Items />
                
                <div className={styles.cost}>
                    <span>کل هزینه</span>
                    {/* <Price /> */}
                </div>

                <ShippingInfo />

                <Footer />

            </div>
        </main>
    );
};

export default Result;