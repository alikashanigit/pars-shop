import React from 'react';
import styles from './styles.module.css';
import CPUModel from './cpu-model/CPUModel';
import { useSelector } from 'react-redux';
import RAMMemory from './ram-memory/RAMMemory';
import CacheMemory from './cache-memory/CacheMemory';
import CPUManufacturer from './cpu-manufacturer/CPUManufacturer';
import GPUModel from './gpu-model/GPUModel';
import GPUManufacturer from './gpu-manufacturer/GPUManufacturer';
import Specs from './specs/Specs';
import { product } from '../../../data';



const Features = () => {    
    // const { product } = useSelector(state => state.productDetails);
    return (
        <section className = {styles.features}>
            <CPUModel product = {product}/>
            <CPUManufacturer product = {product}/>
            <GPUModel product = {product}/>
            <GPUManufacturer product = {product}/>
            <RAMMemory product = {product}/>
            <CacheMemory product = {product}/>
            <Specs />
        </section>
    );
};

export default Features;