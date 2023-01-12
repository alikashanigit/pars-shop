import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../Product';
import Container from './container/Container';


const Shop = () => {
    const { toggle, setToggle } = useContext(ToggleContext)
    return (
        <>
        <div className={styles.shop}>
            <button onClick = {() => setToggle({ ...toggle, shop: true })}>
                سفارش دهید
            </button>
            <Container />
        </div>
        </>
    );
};

export default Shop;