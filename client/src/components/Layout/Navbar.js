import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = { color: "#F15B2A" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>
                About
            </NavLink>
            {" | "}
            <NavLink to="/courses" activeStyle={activeStyle}>
                Courses
            </NavLink>
            {" | "}
            <NavLink to="/1337" activeStyle={activeStyle}>
                404 Test
            </NavLink>
        </nav>
    );
};

export default Navbar;
