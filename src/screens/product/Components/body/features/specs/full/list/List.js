import React from 'react';
import styles from './styles.module.css';
import Display from './categories/display/Display';
import Processors from './categories/processors/Processors';
import Memory from './categories/memory/Memory';
import Network from './categories/network/Network';
import Other from './categories/other/Other';


const List = () => {
    return (
        <ul className = {styles.list}>
            <Display />
            <Processors />
            <Memory />
            <Network />         
            <Other />
        </ul>
    );
};

export default List;