import React, { useContext } from 'react';
import styles from './styles.module.css';
import { QueryDataContext } from '../../../../Laptops';
import Form from './form/Form';
import Recently from './recently/Recently';
import Suggestions from './suggestions/Suggestions';
import Results from './results/Results';


const Container = () => {
    const { queryData, setQueryData } = useContext(QueryDataContext);
    return (
        <div className = {styles.container}>
            {queryData.keyword
            ? <Results keyword = {queryData.keyword} />
            : <>
            {/* <Suggestions /> */}
            <Recently />
            </>}
            <Form />
        </div>      
    );
};

export default Container;