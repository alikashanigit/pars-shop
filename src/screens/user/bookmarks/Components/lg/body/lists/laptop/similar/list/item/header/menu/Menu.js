import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';


const ITEM_HEIGHT = 45;

const MenuContainer = ({ item, onRemove }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <button
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" 
                width = '16'
                height = '16' 
                fill = 'currentColor'
                class="bi bi-three-dots" viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </button>
            <Menu
            id = "long-menu"
            MenuListProps = {{ 'aria-labelledby': 'long-button' }}
            anchorEl = {anchorEl}
            open = {open}
            onClose = {handleClose}
            PaperProps = {{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
            >
                <MenuItem onClick={handleClose}>
                    <button onClick={() => onRemove(item._id)} to = ''>مقایسه</button>
                </MenuItem>
            </Menu>
          
    </div>
    )
}

export default MenuContainer; 