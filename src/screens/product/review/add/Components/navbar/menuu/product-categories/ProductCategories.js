import React from 'react'
import styles from './styles.module.css'
import List from './list/List';



const ProductCategories = () => {
    return (
        <div className = {styles.container}>
            <span>دسته بندی‌ها</span>
            <List />
        </div>
    )
}

export default ProductCategories;