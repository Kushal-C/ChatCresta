import React, { Component } from 'react'


class SendMessage extends Component {

    constructor(props) {
        super(props);
        this.state = { messages: [], currentMesage:'' };
        
        //Bind Event Handlers
        this.onInputChange = this.onInputChange.bind(this);
        this.addMessage = this.addMessage.bind(this);
    }

    onInputChange(event) {
        this.setState({currentMesage: event.target.value});
    }

    // Adds Messages to current chat along with sender tag
    addMessage(event) {
        let messages = this.state.messages;
        messages.push({message: this.state.currentMesage, sender: 0});
        this.setState({ messages: messages, currentMesage:'' });
    }

    render() {
        
        return (
            <div className="input-group flex-grow chat-send"> {/*Send Message Function*/}
                <input type="text" className="form-control" placeholder="Enter message here..." value={this.state.currentMesage} onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button className="btn btn-outline-primary" onClick={this.addMessage} type="button">Send</button>
                </span>
            </div>
        );
    }

}

export default SendMessage;