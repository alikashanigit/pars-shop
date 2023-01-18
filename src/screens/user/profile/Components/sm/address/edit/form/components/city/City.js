import React from 'react';


const City = ({}) => {
    return (
        <div className={styles.container}>
            <label htmlFor=''>شهر</label>
            <select id = '' 
            name = 'city'
            onChange = {e => setData({
                ...data,
                city: e.target.value,
            })}
            >
                {cities.map(city => <option key = {city} value = {city}>{city}</option>)}
            </select>
        </div> 
    );
};

export default City;