import React, { Component } from 'react';

import Timer from './timer';

class ChatListItem extends Component {
    render() {
        return (
            <li className="list-item">
                <div>
                    <div className="same-line">
                        <h6>Kushal Cuttari</h6>
                        <p>Sample chat text</p>
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