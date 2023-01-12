import React, { memo } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Item from '../item/Item';
import WiFi from './wifi/WiFi';



const Network = () => {
    const { product: { specs: { network } } } = useSelector(state => state.productDetails);
    return (
        <div className = {styles.category}>
            <span className = {styles.title}>شبکه</span>
            <ul className = {styles.items}>
                <Item title = 'Wlan'>
                    <span id = {styles.resolution}>{network.wlan}</span>
                </Item>
                <Item title = 'بلوتوث'>
                    <span id = {styles.resolution}>{network.bluetooth === true ? 'دارد' : 'ندارد'}</span>
                </Item>
                <Item title = 'نسخه‌ی بلوتوث'>
                    <span id = {styles.resolution}>{network.bluetoothVersion}</span>
                </Item>
                <Item title = 'WiFi'>
                    <WiFi wifi={network.wifi} />
                </Item>
            </ul>
        </div>
    );
};

export default Network;