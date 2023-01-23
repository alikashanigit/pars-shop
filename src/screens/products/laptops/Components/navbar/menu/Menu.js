import React, { useState } from 'react';
import styles from './styles.module.css';
import Backdrop from '@mui/material/Backdrop';
import ProductCategories from './product-categories/ProductCategories';
import Featured from './featured/Featured';


const Categories = ({ toggle, setToggle }) => {
    const [keyword, setKeyword] = useState('');
    return (
        <Backdrop id = {styles.backdrop} open = {toggle.categories}>
            <div className = {styles.hidden_back} onClick = {() => setToggle({ bag: false })} />
            <span className={styles.sign}></span>
            <div className = {styles.container} >              
                <form className={styles.search}>
                    <label hidden htmlFor = ''>جستجوی محصولات</label>
                    <input id = '' type='text' placeholder='نام، برند، ... محصول'
                    name = 'keyword'
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '14'
                    height = '14' 
                    fill = '#666'
                    class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    {keyword && <button className={styles.clear_btn}
                    type = 'button' 
                    onClick={() => setKeyword('')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width= '14'height= '14' fill='currentColor'
                        class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </button>}
                </form>
                <ProductCategories />
                <Featured />
            </div>
        </Backdrop>
    );
};

export default Categories;