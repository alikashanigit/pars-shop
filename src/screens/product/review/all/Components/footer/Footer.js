import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import Sort from './sort/Sort';


const Footer = () => {
    const { id } = useParams();
    return (
        <footer className = {styles.footer}>
            <Sort />
            
            <div>
                <Link to = {`add-review`}>
                    <span>امتیاز و دیدگاه شما</span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width = '16'
                    height = '16' 
                    fill = 'currentColor' class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;