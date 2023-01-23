import React from 'react';
import styles from './styles.module.css';


const ShippingInfo = ({ shippingInfo, prices }) => {
    return (
        <section className = {styles.section}>
            <div className={styles.container}>
                <span className={styles.title}>تحویل گیرنده</span>
                <div className={styles.value}>
                    <span>{shippingInfo.customer.fullName}</span>
                    <span>{shippingInfo.customer.phone}</span>
                </div>
            </div>
            <div className={styles.container}>
                <span className={styles.title}>محل تحویل</span>
                <div className={styles.value} id = {styles.address}>
                    <div className = {styles.state_city}>
                        <span>{shippingInfo.address.state}</span>
                        <span>-</span>
                        <span>{shippingInfo.address.city}</span>
                    </div>
                    <span className={styles.street}>
                        {shippingInfo.address.street}
                    </span>
                    <span className={styles.zipCode}>
                        <span>کد پستی</span>
                        <span>{shippingInfo.address.zipCode}</span>
                    </span>
                    <span className={styles.details}>
                        <span>{shippingInfo.address.details}</span>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ShippingInfo;