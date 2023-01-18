import React from 'react'
import styles from './styles.module.css';
import Name from './name/Name';
import Phone from './phone/Phone';


const Guest = () => {
    return (
        <section className = {styles.container}>
            <Name />
            <Phone />
        </section>
    )
}

export default Guest