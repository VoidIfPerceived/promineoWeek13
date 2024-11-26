import React from 'react';

let e = React.createElement;

export default class LoginForm extends React.Component {
    render() {
        return e('div', {className: 'container col-md-6 align-items-center border border-secondary', style: {padding: '20px'}},
            e('h3', null, 'Log In'),
            e('div', {className: 'form-group'}, 
                e('label', {htmlFor: 'usernameInput'}, 'Username'),
                e('input', {type: 'text', className: 'form-control', id: 'usernameInput', placeholder: 'Username'})
            ),
            e('div', {className: 'form-group'},
                e('label', {htmlFor: 'passwordInput'}, 'Password'),
                e('input', {type: 'password', className: 'form-control', id: 'passwordInput', placeholder: 'Password'})
            ),
            e('br'),
            e('button', 
                {class: 'btn btn-primary', id: 'logInButton'},
                'Log In'
            ),
        );
    }
}