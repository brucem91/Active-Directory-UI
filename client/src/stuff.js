import React, { Component } from "react";

class Stuff extends Component {

    constructor(props) {
        super(props);
        this.state = { count: 0, max: 8 };
    }

    doTheThing = () => {
        this.setState(() => {
            if (this.state.count < this.state.max) {
                return { count: this.state.count + 1 };
            }
        });
    }

    render() {
        return (
            <div>
                <h2>STUFF</h2>
                <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
                <ol>
                    <li>Nulla pulvinar diam</li>
                    <li>Facilisis bibendum</li>
                    <li>Vestibulum vulputate</li>
                    <li>Eget erat</li>
                    <li>Id porttitor</li>
                </ol>
                <button onClick={this.doTheThing} className="btn btn-primary">Do the Thing! {this.state.count} / {this.state.max}</button>
            </div>
        );
    }
}

export default Stuff;