import React from "react";

let e = React.createElement;

export default class Navbar extends React.Component {
    render() {
        return e('div',
            {className: 'navbar navbar-expand-md navbar-dark bg-primary d-flex justify-content-center'},
                e('div', {className: 'navbar-brand'}, 'Navbar'),
                e('ul', {className: 'navbar-nav'},
                [
                    e('li', {className: 'nav-item'}, e('a', {className: 'nav-link', href: '#'}, 'Home')),
                    e('li', {className: 'nav-item'}, e('a', {className: 'nav-link', href: '#'}, 'Browse')),
                    e('li', {className: 'nav-item'}, e('a', {className: 'nav-link', href: '#'}, 'Community')),
                    e('li', {className: 'nav-item'}, e('a', {className: 'nav-link', href: '#'}, 'Log In'))
                ]
            )
        )
    }
}
