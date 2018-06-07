import React, { Component } from 'react';
import connect from 'react-redux';

import SendMessage from './message_send';

class ChatWindow extends Component {
    render() {

        return (
            <div className="col col-md-6 no-gutters border">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-column h-100 flex-grow">
                        <div className="chat-title">
                            <h4 className="title" style={{ "float": "left" }}>Conversation with {/*this.props.chat.name*/}</h4>
                            <button className="btn-sm btn-outline-danger title" style={{ "float": "right" }} type="button">End Conversation</button>
                        </div>
                        <div>
                            <p> Last 10 lines of chat summary goes here{/*this.props.chat.summary*/}</p> {/*Last 10 lines of chat summary goes here*/}
                            <hr />
                        </div>
                        <div className="flex-grow chat-body"> {/*Load conversation history here*/}
                        {/*
                            <ul style={{ "width": "100%", "height": "100%" }} className="chat-body">
                                {/*Maps list of chat messages to function, if message sender is you, the .sender property will be 0}
                                {this.props.chat.messages.map((message) => {
                                    if(message.sender == 0) {
                                        return ( 
                                            <li>
                                                <div className="text-container">
                                                    <p>{message}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                    else {
                                        return (
                                            <li>
                                                <div className="text-container-foreign">
                                                    <p>{message}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                })}
                            
                            </ul>
                            */}
                        </div>
                        <SendMessage/>
                    </div>
                </div>


            </div>
        );
    }
}

function mapStateToProps() {
    return {
        chat: state.activeChat
    }
}

export default ChatWindow;