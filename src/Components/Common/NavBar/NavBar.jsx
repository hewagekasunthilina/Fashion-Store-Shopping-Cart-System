import React, {Component} from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    console.log(window.location.pathname);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Look @ Me</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        props.menuList.map((value, index) => {
                            return (
                                <Link to={value.url} key={"link" + value.route + index}>
                                    <li
                                        className={`nav-item ${(window.location.pathname === value.url) ? "active" : ""}`}
                                    >
                                        <span className="nav-link">{value.name}</span>
                                    </li>
                                </Link>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;