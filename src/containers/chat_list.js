import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatListItem from '../components/chat_list_item';

class ChatList extends Component {

    constructor(props){
        super(props);

    }

    renderList() {
        return this.props.chats.map(((chat) => {
            return (
                <ChatListItem 
                    key={chat.name}
                    name={chat.name}
                    summary={chat.summary}
                />
            );
        }));
    }

    render() {
        return (
            <div className="col col-md-3 chat-scrollable" style={{ "height": "95vh" }}>
                <h6 style={{ "margin-top": "20px", "text-align": "center" }}> Active Conversations </h6>
                <hr />
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    //Whatever is returned here will show up as props inside of chat_list
    return {
        chats: state.chats
    };
}

export default connect(mapStateToProps)(ChatList);