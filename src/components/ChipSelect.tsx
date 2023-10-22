import React, {useState} from 'react';
import Chip from '@mui/material/Chip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Option} from "@/components/types";

type Props = {
    options: Option[];
    label: string;
    selected?: Option;
    onSelect: (option: Option) => void;
}
export function ChipSelect({ options, label, selected, onSelect }: Props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (option: any) => {
        onSelect(option);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Chip
                label={options.find(o => o.id === selected?.id)?.label || label}
                onClick={handleMenuClick}
                onDelete={handleMenuClick}
                deleteIcon={<ExpandMoreIcon />}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option.id}
                        selected={option.id === selected?.id}
                        onClick={() => handleMenuItemClick(option)}
                    >
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );


}