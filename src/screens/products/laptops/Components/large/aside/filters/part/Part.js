import React from 'react';
import styles from './styles.module.css';
import Button from './button/Button';
import Collapse from './collapse/Collapse';


const Part = ({ children, title, id, partTitle, partList }) => {
    return (
        <li className = {styles.part}>

            <Button partTitle = {partTitle} partList = {partList} title = {title} id = {id} />

            <Collapse children = {children} title = {title} id = {id} />
            
        </li>      
    );
};

export default Part;