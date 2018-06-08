import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

import * as actionCreators from '../actions'
import SendMessage from './message_send';


class ChatWindow extends Component {
    componentWillUpdate(nextProps) {
        if (nextProps.specificProperty !== this.props.specificProperty) {
            this.render();
        }
    }
    render() {
        //Default state when state hasn't loaded yet.
        if (this.props.chat == null) {
            return <div className="col col-md-6 no-gutters border">Select a chat to get started.</div>
        }
        return (
            <div className="col col-md-6 no-gutters border">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-column h-100 flex-grow">
                        <div className="chat-title">
                            <h4 className="title" style={{ "float": "left" }}>Conversation with {this.props.chat.name}</h4>
                            <button className="btn-sm btn-outline-danger title" style={{ "float": "right" }} type="button">End Conversation</button>
                        </div>
                        <div>
                            <p> {this.props.chat.summary}</p> {/*Last 10 lines of chat summary goes here*/}
                            <hr />
                        </div>
                        <div className="flex-grow chat-body"> {/*Load conversation history here*/}

                            <ul style={{ "width": "100%", "height": "100%" }} className="chat-body">
                                {/*Maps list of chat messages to function, if message sender is you, the .sender property will be 0*/}
                                {this.props.chat.messages.map(({ message, sender }) => {
                                    if (sender == 0) {
                                        return (
                                            <li key={_.uniqueId(message)}>
                                                <div className="text-container">
                                                    <p>{message}</p>
                                                </div>
                                                <br/>
                                            </li>
                                        );
                                    }
                                    else {
                                        return (
                                            <li key={_.uniqueId(message)}>
                                                <div className="text-container-foreign">
                                                    <p>{message}</p>
                                                </div>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>

                        </div>
                        <SendMessage/>
                    </div>
                </div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        chat: state.activeChat,
        chats: state.chats,
        updateChat: state.updateChat
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChatWindow);