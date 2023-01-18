import React from 'react';
import styles from './styles.module.css';



const Methods = () => {
    return (
        <div className = {styles.part}>

            <span>روش پرداخت</span>

            <ul>
                <li>
                    <button id = {styles.ap_btn}>
                        <img alt = 'آپ'
                        src = 'https://play-lh.googleusercontent.com/MytLmegsOxNQR7EMGP-bWy6F3wJiK5F-lzqWgxlJg1VoXmZfl_25F_ikEuLpaDQmMTc'
                        />
                        <span>آپ</span>
                    </button>
                </li>
                <li>
                    <button id = {styles.cc_btn}>
                        <img alt = 'آپ'
                        src = 'https://bitcoin.org/img/icons/opengraph.png?1671880122'
                        />
                        <span>رمزارز</span>
                    </button>
                </li>
            </ul>
            
        </div>
    );
};

export default Methods;