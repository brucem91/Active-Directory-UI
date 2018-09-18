import React, { Component } from "react";
import { throttle, debounce } from 'throttle-debounce';
import axios from "axios";

class UserRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.user.sAMAccountName}</td>
            </tr>
        )
    }
}

class UserRowCollection extends Component {
    render() {
        if ((this.props.users || []).length === 0) {
            return (
                <tr>
                    <td colSpan="2">No User(s) Found</td>
                </tr>
            )
        }

        return (this.props.users.map((user) => (<UserRow key={user.sAMAccountName} user={user} />)));
    }
}

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'searchTerms': '',
            'users': [],
            'searchTimeout': null
        };
        this.fetchUsers();
    }

    fetchUsers = () => {
        var self = this;
        var users = [];

        axios.get(`/api/users?search=${encodeURIComponent(this.state.searchTerms)}`).then((res) => {
            if (res.status === 200) {
                users = res.data;
            }
            self.setState({ users: users });
        });
    }

    handleKeywordChange = (event) => {
        this.setState({ searchTerms: event.target.value }, () => this.fetchUsers());
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.searchTerms} onChange={this.handleKeywordChange} />
                <table className="table table-responsive table-striped table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserRowCollection users={this.state.users} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Users;