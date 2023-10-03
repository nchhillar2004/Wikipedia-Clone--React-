import * as React from "react";
import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "@mui/material";
import './MoreOptions.css'

export default function MoreOptions() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="Login and more options">
                <IconButton 
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                    <MoreHorizIcon />
                </IconButton>
            </Tooltip>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <a>Create a new post and contribute</a>
                <Link href="https://wiki.nishantchhillar.tech/createpost">Create Post</Link>
                <Link href="https://wiki.nishantchhillar.tech/login">Log in as admin</Link>
            </Menu>
        </div>
    );
}
