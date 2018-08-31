import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="header">Todo App</div>
        );
    }
}

export default Header;