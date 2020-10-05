import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = ({title}) => {
    
    return (
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
        <a href="/" className="navbar-brand">{title}</a>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item ">
                <Link to="/add" className="nav-link">Add User</Link>
            </li>
            <li className="nav-item ">
                <Link to="/github" className="nav-link">Project Files</Link>
            </li>

        </ul>
    </nav>


        // <div>
        //     <h3>{title}</h3>
        //     <ul>
        //         <li>
        //             <Link to='/'>Home </Link>
        //         </li>
        //         <li>

        //             <Link to='/add'>Add User</Link>
        //         </li>
        //         <li>
        //             <Link to="/github">Project files</Link>
        //         </li>
        //     </ul>
        // </div>

    );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Default App"
}
export default Navbar;