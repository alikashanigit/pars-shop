import React from 'react';
import styles from './styles.module.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


const Rating = ({ value }) => {
    return (
        <div className = {styles.rating}>
            {value >= 5
            ? <StarIcon style={{ fontSize: '1.5rem'}} />
            : value >= 4.5
            ? <StarHalfIcon style={{ fontSize: '1.5rem'}} />
            : <StarOutlineIcon style={{ fontSize: '1.5rem'}} />
            }
            {value >= 4
            ? <StarIcon style={{ fontSize: '1.5rem'}} />
            : value >= 3.5
            ? <StarHalfIcon style={{ fontSize: '1.5rem'}} />
            : <StarOutlineIcon style={{ fontSize: '1.5rem'}} />
            }
            {value >= 3
            ? <StarIcon style={{ fontSize: '1.5rem'}} />
            : value >= 2.5
            ? <StarHalfIcon style={{ fontSize: '1.5rem'}} />
            : <StarOutlineIcon style={{ fontSize: '1.5rem'}} />
            }
            {value >= 2
            ? <StarIcon style={{ fontSize: '1.5rem'}} />
            : value >= 1.5
            ? <StarHalfIcon style={{ fontSize: '1.5rem'}} />
            : <StarOutlineIcon style={{ fontSize: '1.5rem'}} />
            }
            {value >= 1
            ? <StarIcon style={{ fontSize: '1.5rem'}} />
            : value >= .5
            ? <StarHalfIcon style={{ fontSize: '1.5rem'}} />
            : <StarOutlineIcon style={{ fontSize: '1.5rem'}} />
            }
        </div>
    );
};

export default Rating;