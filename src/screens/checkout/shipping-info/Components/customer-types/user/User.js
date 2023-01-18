import React from 'react'
import styles from './styles.module.css';
import { useSelector } from 'react-redux';


const User = () => {
    const { userInfo } = useSelector(state => state.shipping)
    return (
        <section className = {styles.container}>
            User
        </section>
    )
}

export default User