import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="col-md-12">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Hello React Router</a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/stuff">Stuff</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/products">Products</NavLink></li>
                                <li><NavLink to="/users">Users</NavLink></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right" />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;