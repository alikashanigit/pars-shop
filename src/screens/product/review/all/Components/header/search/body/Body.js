import React from 'react';
import styles from './styles.module.css';
import Suggestions from './suggestions/Suggestions';
import Results from './results/Results';
import Form from './form/Form';
import Recently from './recently/Recently';


const Body = ({ queryData, setQueryData }) => {
    return (
        <div className={styles.body}>
            
            <Results queryData = {queryData} />

            {!queryData.keyword && 
            <div className = {styles.related}>
                <Recently />
                <Suggestions queryData = {queryData} />
            </div>
            }

            <Form queryData = {queryData} setQueryData = {setQueryData} />

        </div>        
    );
};

export default Body;