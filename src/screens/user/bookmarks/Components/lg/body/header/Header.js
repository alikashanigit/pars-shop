import React, { useContext } from 'react';
import styles from './styles.module.css';
import { ToggleContext } from '../../../../Bookmarks';


const Header = () => {
    const { toggle, setToggle } = useContext(ToggleContext);
    const productCategoryTitle = toggle.allCategories
        ? 'محصولات'
        : toggle.laptop
        ? 'لپتاپ‌های'
        : toggle.mobile
        ? 'موبایل‌های'
        : toggle.tablet
        ? 'تبلت‌های'
        : toggle.arcade 
        ? 'کنسول و بازی‌های'
        : toggle.accessories 
        && 'لوازم جانبی';
    return (
        <header className = {styles.header}>
            
            <div>
                {productCategoryTitle}
                <span>ذخیره شده</span>
            </div>

            <div></div>

            <div>
                {!toggle.allCategories &&
                <button 
                id = {toggle.laptop ? styles.selected : ''}
                onClick={() => setToggle({ allCategories: true })}
                >
                    <span>همه‌ی دسته‌ها</span>
                </button>
                }
                {!toggle.laptop &&
                <button 
                id = {toggle.laptop ? styles.selected : ''}
                onClick={() => setToggle({ laptop: true })}
                >
                    <span>لپتاپ</span>
                </button>
                }
                {!toggle.mobile &&
                <button 
                id = {toggle.mobile ? styles.selected : ''}
                onClick={() => setToggle({ mobile: true })}
                >
                    <span>موبایل</span>
                </button>
                }
                {!toggle.tablet &&
                <button 
                id = {toggle.tablet ? styles.selected : ''}
                onClick={() => setToggle({ tablet: true })}
                >
                    <span>تبلت</span>
                </button>
                }
                {!toggle.arcade &&
                <button 
                id = {toggle.arcade ? styles.selected : ''}
                onClick={() => setToggle({ arcade: true })}
                >
                    <span>بازی</span>
                </button>
                }
                {!toggle.accessories &&
                <button 
                id = {toggle.accessories ? styles.selected : ''}
                onClick={() => setToggle({ accessories: true })}
                >
                    <span>لوازم جانبی</span>
                </button>
                }
            </div>

        </header>
    );
};

export default Header;