import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import Menu from "./menu";
import Products from "./products";
import Users from "./controllers/users.controllers";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="col-md-12">
                            <Route exact path="/" component={Home} />
                            <Route path="/stuff" component={Stuff} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/products" component={Products} />
                            <Route path="/users" component={Users} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;