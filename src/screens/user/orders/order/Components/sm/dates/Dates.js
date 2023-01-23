import React from 'react';
import styles from './styles.module.css';


const Dates = ({ dates }) => {
    const splitYearFromDay = dates.order.day.split(' ', 4).pop()
    const splitAllFromDay = dates.order.day.split(' ', 3)
    console.log({
        splitYearFromDay,
        splitAllFromDay
    })
    // const yearValue = splitedDay[splitedDay.length - 1];
    return (
        <section className = {styles.section}>
            <div className={styles.container}>
                <span className={styles.title}>تاریخ سفارش</span>
                <div className={styles.value}>
                    <div>
                        <span>{splitAllFromDay}</span>
                        <span>{splitYearFromDay}</span>
                    </div>
                    <span>{dates.order.time}</span>
                </div>
            </div>
            <div className={styles.container}>
                {/* {dates.delivered.day &&  */}
                <>
                <span className={styles.title}>تاریخ تحویل</span>
                <div className={styles.value}>
                    <span>{dates.order.day}</span>
                    <span>{dates.order.time}</span>
                </div>
                </>
                {/* } */}
            </div>
        </section>
    );
};

export default Dates;