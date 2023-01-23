import React from 'react';
import styles from './styles.module.css';


const Dates = ({ dates }) => {
    const splitYearFromDay = dates.ordered.day.split(' ', 4).pop()
    const splitAllFromDay = dates.ordered.day.split(' ', 3)
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
                    <span>{dates.ordered.time}</span>
                </div>
            </div>
            <div className={styles.container}>
                {/* {dates.delivered.day &&  */}
                <>
                <span className={styles.title}>تاریخ تحویل</span>
                <div className={styles.value}>
                    <span>{dates.ordered.day}</span>
                    <span>{dates.ordered.time}</span>
                </div>
                </>
                {/* } */}
            </div>
        </section>
    );
};

export default Dates;