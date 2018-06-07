import React, { Component } from 'react';

import Timer from './timer';

class ChatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            summary: this.props.summary
        }
    }
    render() {
        return (
            <li className="list-item">
                <div>
                    <div className="same-line">
                        <h6>{this.state.name}</h6>
                        <p>{this.state.summary}</p>
                    </div>
                    <div className="same-line">
                        <Timer/>
                    </div>
                </div>
                <hr/>
            </li>
        );
    }
}

export default ChatListItem;