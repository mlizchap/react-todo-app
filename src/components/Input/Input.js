import React, { Component } from 'react';

import './Input.scss';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            val: ''
        };
    }
    render() {
        return (
            <form className="form" onSubmit={(e) => {
                e.preventDefault();
                this.setState({ val: '' });
                this.props.handleSubmit({name: this.state.val, completed: false});
            }}>
                <input  
                    className="form__input"
                    value={this.state.val}
                    onChange={(e) => this.setState({ val: e.target.value })}
                />
                <input className="form__submitBtn" type="button" value="+"/>
            </form>
        );
    }
}

export default Input;