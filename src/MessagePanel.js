import React, { Component } from 'react';

class MessagePanel extends Component {
    render() {
        return (
            <div >
                <h4>
                    {this.props.message + ' : ' + this.props.count}
                </h4>
            </div>
        );
    }
}

export default MessagePanel;