import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChat } from '../actions/index';
import PropTypes from "prop-types";

class ChatSuggestions extends Component {
    //Maps across all suggestions and renders them in a styled div. 
    constructor(props) {
        super(props);
        this.addSuggestion= this.addSuggestion.bind(this);

    }
    renderSuggestions() {
        return this.props.chat.suggestions.map((suggestion) => {
            return (
                <li key={suggestion} onClick={() => this.addSuggestion(suggestion)} className="text-container-foreign">
                    <p> {suggestion}</p>
                </li>
            );
        });
    }
    addSuggestion(suggestion){
        let messages = { message: suggestion, sender: 0 };
        for (var i = 0; i < this.props.chats.chats.length; i++) {
            if (this.props.chats.chats[i].key == this.props.chat.key) {
                this.props.updateChat({ i, messages });
            }
        }
    }

    render() {
        if (this.props.chat == null) {
            return (
                <div className="col col-md-3"> Please select a chat to get started </div>
            );
        }
        return (
            <div className="col col-md-3">
                <h6 style={{ "margin-top": "23px", "text-align": "center" }}> Chat Suggestions </h6>
                <hr />
                <div className="chat-scrollable">
                    <ul>
                        {this.renderSuggestions()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will show up as props inside of chat_list
    return {
        chat: state.activeChat,
        chats: state.chats
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateChat: (chat) => dispatch(updateChat(chat))

    };
};

ChatSuggestions.propTypes = {
    updateChat: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatSuggestions);