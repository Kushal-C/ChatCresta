import React, { Component } from 'react';
import {connect} from 'react-redux';

class ChatSuggestions extends Component {

    //Maps across all suggestions and renders them in a styled div. 
    renderSuggestions(){
        return this.suggestions.map((suggestion) => {
            <div className="text-container-foreign">
                <p>{suggestion}</p>
            </div>
        });
    }
    render() {
        return (
            <div className="col col-md-3">
                <h6 style={{ "margin-top": "23px", "text-align": "center" }}> Chat Suggestions </h6>
                <hr />
                <div className="chat-scrollable">
                    {/*this.renderSuggestions()*/}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will show up as props inside of chat_list
    return {
        suggestions: state.suggestions
    };
}

export default connect(mapStateToProps)(ChatSuggestions);