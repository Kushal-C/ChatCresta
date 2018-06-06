import React, { Component } from 'react';

class ChatWindow extends Component {
    render() {
        return (
            <div className="col col-md-6 no-gutters border">
                <div class="d-flex flex-column h-100">
                    <div className="d-flex flex-column h-100 flex-grow">
                        <div className="chat-title">
                            <h4 className="title" style={{ "float": "left" }}>Conversation with {/*insert customer name here*/}Name</h4>
                            <button className="btn-sm btn-outline-danger title" style={{"float":"right"}} type="button">End Conversation</button>
                        </div>
                        <div>
                            <p> Summary of last 10 lines of conversation goes here</p>
                            <hr/>
                        </div>
                        <div className="h-100 flex-grow chat-body">
                            <ul>
                            </ul>
                        </div>
                        <div className="input-group flex-grow chat-send">
                            <input type="text" className="form-control" placeholder="Enter message here..." />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Send</button>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ChatWindow;