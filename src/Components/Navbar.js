import React from "react";
import {NavLink, Link} from 'react-router-dom';


function Navbar(props){

    return(
        <div id="Navbar">
            <Link to="/" id="NavBrand">Notes</Link>
            <ul id="Navigations">
                <li className="NavItem"><NavLink exact to="/" activeClassName="ActiveNavLink">Notes</NavLink> </li>
                <li className="NavItem"><NavLink to="/add" activeClassName="ActiveNavLink">Add</NavLink> </li>
            </ul>
        </div>
    )
}

export default Navbar;