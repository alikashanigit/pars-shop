import React from 'react';
import styles from './styles.module.css';
import { BookmarkIcon, DotsIcon } from '../../../../../../../../../../../../icons';
import Rating from './rating/Rating';


const Header = () => {
    return (
        <div className = {styles.header}>
            <ul className = {styles.actions}>
                <li>
                    <button>
                        <DotsIcon color='#0288e0' width='18' height='18' />
                    </button>
                </li>
                <li>
                    <button>
                        <BookmarkIcon color='#0288e0' width='17' height='17' />
                    </button>
                </li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" fill="currentColor" 
                        class="bi bi-back" viewBox="0 0 16 16">
                        <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
                        </svg>
                    </button>
                </li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width="14" height="14" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                        <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                        </svg>
                    </button>
                </li>
            </ul>
            <Rating />
        </div>
    );
};

export default Header;