import React from "react";
import Navbar from "./navbar";
import LoginForm from "./loginForm";

let e = React.createElement;

export default class LoginPage extends React.Component {
    render() {
        return e('div', {className: 'container'},
            e(Navbar),
            e(LoginForm)
        );
    }
}