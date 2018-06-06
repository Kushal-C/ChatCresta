import React, { Component } from 'react';

class ChatListItem extends Component {
    render() {
        return (
            <li className="list-item">
                <div>
                    <div className="same-line">
                        <h6>FirstName Last</h6>
                        <p>Sample chat text</p>
                    </div>
                    <div className="same-line">
                    </div>
                </div>
                <hr/>
            </li>
        );
    }
}

export default ChatListItem;