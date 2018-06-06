import React, { Component } from 'react';

class ChatSuggestions extends Component {
    render() {
        return (
            <div className="col col-md-3 chat-scrollable">
                <h6 style={{ "margin-top": "23px", "margin-left": "5px" }}> Chat Suggestions </h6>
                <div className="text-container-foreign">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. Suspendisse semper a neque vel hendrerit. Sed vitae mi at nisi facilisis rhoncus sed id dui. Aliquam bibendum ante auctor nisi rutrum rutrum. </p>
                </div>
                <div className="text-container-foreign">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta sagittis dui, interdum faucibus felis pretium in. Donec dui tortor, congue id tortor id, mattis viverra nisl. Suspendisse semper a neque vel hendrerit. Sed vitae mi at nisi facilisis rhoncus sed id dui. Aliquam bibendum ante auctor nisi rutrum rutrum. </p>
                </div>
                
            </div>
        );
    }
}

export default ChatSuggestions;