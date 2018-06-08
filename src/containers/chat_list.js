import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectChat} from '../actions/index';
import {bindActionCreators} from 'redux';

import ChatListItem from '../components/chat_list_item';

class ChatList extends Component {

    constructor(props){
        super(props);
    }

    renderList() {
        return this.props.chats.chats.map(((chat) => {
            return (
                <ChatListItem 
                    key={chat.key}
                    name={chat.name}
                    summary={chat.summary}
                    onClick={() => this.props.selectChat(chat)}
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
        chats: state.chats,
        activeChat: state.activeChat
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectChat: selectChat}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);