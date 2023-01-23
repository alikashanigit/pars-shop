import React from 'react';
import styles from './styles.module.css';


const ShippingInfo = ({ shippingInfo }) => {
    return (
        <div className={styles.shippingInfo}>
            <div className={styles.personal_info}>
                <span className={styles.title}>خریدار</span>
                <div className={styles.details}>
                    <span className={styles.name}>{shippingInfo.customer.fullName}</span>
                    <span className={styles.phone}>{shippingInfo.customer.phone}</span>
                </div>
            </div>
            <div className={styles.address_info}>
                <span className={styles.title}>محل تحویل</span>
                <div className={styles.details}>
                    <div className={styles.state_city}>
                        <span className={styles.state}>{shippingInfo.address.state}</span>
                        <span>-</span>
                        <span className={styles.city}>{shippingInfo.address.city}</span>
                    </div>
                    <span className={styles.street}>
                        {shippingInfo.address.street}
                    </span>
                    <div className={styles.zipCode}>
                        <span className={styles.title}>کد پستی</span>
                        <span className={styles.value}>{shippingInfo.address.zipCode}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingInfo;