import React from 'react';
import styles from './styles.module.css';
import Button from './btn/Button';
import Menu from './menu/Menu';


const Sort = () => {
    
    return (
        <div className = "dropup-center dropup" id = {styles.container}>
                
            <Button />

            <Menu  />

        </div>
    );
};

export default Sort;