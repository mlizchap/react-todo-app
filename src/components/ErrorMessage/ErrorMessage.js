import React, {Component} from 'react';

import './ErrorMessage.scss';

class ErrorMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="errorMessage">
                {this.props.isError ? <span className="errorMessage__text">Todo already exists</span> : <span>&nbsp;</span> }
            </div>
        )
    }
}

export default ErrorMessage;
    
