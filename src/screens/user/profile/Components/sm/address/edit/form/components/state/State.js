import React from 'react';


const State = ({}) => {
    return (
        <div className = {styles.container}>
            <label hidden htmlFor=''>استان</label>
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
    );
};

export default State;