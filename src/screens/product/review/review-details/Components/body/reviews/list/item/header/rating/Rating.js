import React from 'react';
import styles from './styles.module.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const Rating = ({ value }) => {
    return (
        <div className = {styles.rating}>
            {value >= 5
            ? <StarIcon />
            : value >= 4.5
            ? <StarHalfIcon />
            : <StarOutlineIcon />
            }
            {value >= 4
            ? <StarIcon />
            : value >= 3.5
            ? <StarHalfIcon />
            : <StarOutlineIcon />
            }
            {value >= 3
            ? <StarIcon />
            : value >= 2.5
            ? <StarHalfIcon />
            : <StarOutlineIcon />
            }
            {value >= 2
            ? <StarIcon />
            : value >= 1.5
            ? <StarHalfIcon />
            : <StarOutlineIcon />
            }
            {value >= 1
            ? <StarIcon />
            : value >= .5
            ? <StarHalfIcon />
            : <StarOutlineIcon />
            }
        </div>
    );
};

export default Rating;