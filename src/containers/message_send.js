import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateChat } from '../actions/index';
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";

class SendMessage extends Component {

    constructor(props) {
        super(props);
        this.state = { currentMessage:'' };
        
        //Bind Event Handlers
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({currentMessage: event.target.value});
    }

    // Adds Messages to current chat along with sender tag
    onFormSubmit(event) {
        event.preventDefault();
        let messages = {message: this.state.currentMessage, sender: 0};
        for(var i = 0; i < this.props.chats.chats.length; i++){
            if(this.props.chats.chats[i].key == this.props.chat.key){
               this.props.updateChat({i, messages});
            }
        }
        //clear form
        event.target.reset();
        
    }

    render() {
        
        return (
            <div className="input-group flex-grow chat-send"> {/*Send Message Function*/}
                <form className="input-group flex-grow chat-send" onSubmit={this.onFormSubmit}>
                    <input type="text" className="form-control" placeholder="Enter message here..." value={this.state.currentMesage} onChange={this.onInputChange} />
                    <span className="input-group-btn">
                       <button className="btn btn-outline-primary" type="submit">Send</button>
                    </span>
                </form>
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

SendMessage.propTypes = {
    updateChat: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);

