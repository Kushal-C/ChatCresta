import React, { Component } from 'react';

import ChatWindow from '../containers/chat_window';
import ChatSuggestions from '../containers/chat_suggestions';
import ChatList from '../containers/chat_list';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <ChatList/>
        <ChatWindow />
        <ChatSuggestions />
      </div>
    );
  }
}
