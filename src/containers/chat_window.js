import React, { Component } from 'react';

class ChatWindow extends Component {
    render() {
        return (
            <div className="col col-md-6 no-gutters border">
                <div className="d-flex flex-column h-100">
                    <div className="d-flex flex-column h-100 flex-grow">
                        <div className="chat-title">
                            <h4 className="title" style={{ "float": "left" }}>Conversation with {/*insert customer name here*/}Name</h4>
                            <button className="btn-sm btn-outline-danger title" style={{"float":"right"}} type="button">End Conversation</button>
                        </div>
                        <div>
                            <p> Summary of last 10 lines of conversation goes here</p>
                            <hr/>
                        </div>
                        <div className="flex-grow chat-body">
                            <ul style={{ "width": "100%", "height": "100%"}}className="chat-body">
                                <li>
                                    <div className="text-container-foreign">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container-foreign">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container-foreign">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="text-container-foreign">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="input-group flex-grow chat-send">
                            <input type="text" className="form-control" placeholder="Enter message here..." />
                            <span className="input-group-btn">
                                <button className="btn btn-outline-primary" type="button">Send</button>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default ChatWindow;