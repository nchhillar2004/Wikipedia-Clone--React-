import React, {useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import MainMenu from "./MainMenu/MainMenu";
import { SearchRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import Link from "@mui/material/Link";
import MoreOptions from "./MoreOptions/MoreOptions";

function Header() {
    const [search, setSearch] = useState('')

    function handleSearchSubmit(event){
        event.preventDefault(); // Prevent the form from submitting traditionally
        const capitalizedSearch = search.charAt(0).toUpperCase() + search.slice(1);
        window.location.href = `https://wiki.nishantchhillar.tech/posts/${capitalizedSearch}`;
    }
    return (
        <div className="header">
            <div className="left">
                <MainMenu/>
                <a href="/"><img className="logo" src={logo}></img></a>
            </div>
            <Tooltip title="Search Wikipedia [alt+shift+f]">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            <SearchRounded />
                        </span>
                        <input
                            type="text"
                            className="input"
                            placeholder="Search Wikipedia"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            required
                        />
                    </div>
                    <button>Search</button>
                </form>
            </Tooltip>
            <div className="right">
                <ul>
                    <li>
                        <Link href="https://wiki.nishantchhillar.tech/register">Create account</Link>
                    </li>
                    <li>
                        {" "}
                        <Link href="https://wiki.nishantchhillar.tech/login">Login</Link>
                    </li>
                    <li>
                        {" "}
                        <MoreOptions/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
