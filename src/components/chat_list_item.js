import React, { Component } from 'react';


import Timer from './timer';

class ChatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            summary: this.props.summary,
            onClick: this.props.onClick,
            isSelected: false
        }
    }
    onClick() {
        this.setState({ isSelected: true });
        this.props.onClick;
    }
    render() {
        return (
            <li onClick={this.state.onClick} className="list-item">
                <div>
                    <div className="same-line">
                        <h6>{this.state.name}</h6>
                        <p>{this.state.summary}</p>
                    </div>
                    <div className="same-line">
                        <Timer isSelected={this.state.isSelected}/>
                    </div>
                </div>
                <hr/>
            </li>
        );
    }
}

export default ChatListItem;