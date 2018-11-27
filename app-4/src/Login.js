import React, { Component } from "react";

class Login extends Component {

    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }

        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.displayAlert = this.displayAlert.bind(this);

    }

    updateUsername(val) {
        this.setState({
            username: val
        })
    }

    updatePassword(val) {
        this.setState({
            password: val
        })
    }

    displayAlert() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={e => this.updateUsername(e.target.value)}></input>
                <input onChange={e => this.updatePassword(e.target.value)}></input>
                <button onClick={this.displayAlert}>Login</button>
            </div>
        )
    }

}

export default Login;

