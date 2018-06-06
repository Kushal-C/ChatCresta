import React, { Component } from 'react';

import ChatListItem from '../components/chat_list_item';

class ChatList extends Component {

    render() {
        return (
            <div className="col col-md-3 chat-scrollable" style={{"height":"95vh"}}>
                <ul>
                    <ChatListItem/>
                    <ChatListItem />
                    <ChatListItem />
                </ul>
            </div>
        );
    }
}

export default ChatList;