import React, { Component } from 'react';

class ChatListItem extends Component {
    render() {
        return (
            <li className="list-item border">
                <div className="">
                    <div>
                        <h6>FirstName Last</h6>
                        <p>Sample chat text</p>
                    </div>
                    <div>
                        Time Spent Unanswered:
                        {}
                    </div>
                </div>
            </li>
        );
    }
}

export default ChatListItem;