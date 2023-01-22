import React from 'react';
import styles from './styles.module.css';
import TopInfo from './top-info/TopInfo';
import QtyWarning from './qty-warning/QtyWarning';
import SubInfo from './sub-info/SubInfo';


const Details = ({ item }) => {
    return (
        <div className = {styles.details}>
           
            <QtyWarning item = {item} />    
            
            <TopInfo item = {item} />
            
            <SubInfo item = {item} />
            
        </div>
    );
};

export default Details;