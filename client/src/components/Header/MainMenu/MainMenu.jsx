import * as React from "react";
import Menu from "@mui/material/Menu";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "@mui/material";
import '../MoreOptions/MoreOptions.css'
import MenuIcon from "@mui/icons-material/Menu";

export default function MainMenu() {
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
            <Tooltip title="Main menu">
                <IconButton 
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}>
                    <MenuIcon />
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
                <a>Main menu</a>
                <hr></hr>
                <Link href="/">Main Page</Link>
                <Link href="https://wiki.nishantchhillar.tech/posts">Popular posts</Link>
                <Link href="https://wiki.nishantchhillar.tech/about">About us</Link>
                <Link href="https://wiki.nishantchhillar.tech/contact">Contact</Link>
                <Link href="https://wiki.nishantchhillar.tech/help">Help</Link>
                <Link href="https://wiki.nishantchhillar.tech/donate">Donate</Link>
                <Link href="https://wiki.nishantchhillar.tech/privacy">Privacy</Link>
                <Link href="https://wiki.nishantchhillar.tech/createpost">Contribute</Link>
                <Link href="https://wiki.nishantchhillar.tech/developer">Developer</Link>
                <hr></hr>
                <div className="card">
                    <p>Language links are at the bottom of the page in the footer.</p>
                </div>
            </Menu>
        </div>
    );
}
