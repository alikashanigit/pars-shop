import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from './locations';
import { editShippingAddress } from '../../../../../../../../redux/user/account/actions';


const Form = ({ data, setData, changeHandler }) => {
    
    const dispatch = useDispatch();
    const { addressInfo } = useSelector(state => state.shipping);
    const [locationState, setLocationState] = useState('');
    
    let [cities, setCities] = useState([]);
    
    useEffect(() => {
        fetchCities(locationState, setCities);
    }, [locationState, setCities]);
    
    useEffect(() => {
        addressInfo && addressInfo.state && setData({ ...data, state: addressInfo.state })
        addressInfo && addressInfo.city && setData({ ...data, city: addressInfo.city })
        addressInfo && addressInfo.street && setData({ ...data, street: addressInfo.street })
        addressInfo && addressInfo.zipCode && setData({ ...data, zipCode: addressInfo.zipCode })
    }, [addressInfo]);
    
    const addLocationHandler = (e) => {
        e.preventDefault();
        dispatch(editShippingAddress(data));
    };

    return (
        <form className = {styles.form}>

            <div className={styles.container}>
                <label htmlFor=''>استان</label>
                <select  name="state" onChange={e => setLocationState(e.target.value)}>
                    <option value="0">لطفا استان را انتخاب نمایید</option>
                    <option value="تهران">تهران</option>
                    <option value="گیلان">گیلان</option>
                    <option value="آذربایجان شرقی">آذربایجان شرقی</option>
                    <option value="خوزستان">خوزستان</option>
                    <option value="فارس">فارس</option>
                    <option value="اصفهان">اصفهان</option>
                    <option value="خراسان رضوی">خراسان رضوی</option>
                    <option value="قزوین">قزوین</option>
                    <option value="سمنان">سمنان</option>
                    <option value="قم">قم</option>
                    <option value="مرکزی">مرکزی</option>
                    <option value="زنجان">زنجان</option>
                    <option value="مازندران">مازندران</option>
                    <option value="گلستان">گلستان</option>
                    <option value="اردبیل">اردبیل</option>
                    <option value="آذربایجان غربی">آذربایجان غربی</option>
                    <option value="همدان">همدان</option>
                    <option value="کردستان">کردستان</option>
                    <option value="کرمانشاه">کرمانشاه</option>
                    <option value="لرستان">لرستان</option>
                    <option value="بوشهر">بوشهر</option>
                    <option value="کرمان">کرمان</option>
                    <option value="هرمزگان">هرمزگان</option>
                    <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
                    <option value="یزد">یزد</option>
                    <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
                    <option value="ایلام">ایلام</option>
                    <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
                    <option value="خراسان شمالی">خراسان شمالی</option>
                    <option value="خراسان جنوبی">خراسان جنوبی</option>
                    <option value="البرز">البرز</option>
                </select>
            </div>

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
            
            <div className={styles.container}>
                <label>آدرس</label>
                <input id = '' type='text'
                placeholder ='خیابان ...'
                name = 'street'
                value = {data.street}
                onChange = {changeHandler}
                />
            </div>

            <div className={styles.container}>
                <label>کد پستی</label>
                <input id = '' type='text'
                placeholder ='235326241'
                name = 'zipCode'
                value = {data.zipCode}
                onChange = {changeHandler}
                />
            </div>

            <button onClick={addLocationHandler}>
                ذخیره
            </button>

        </form>
    );
};

export default Form;