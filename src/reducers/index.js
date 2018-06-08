import { combineReducers } from 'redux';
import ChatReducer from './reducer_chats';
import ActiveChat from './reducer_active_chat';
import UpdateChat from './reducer_chat_update';
//Export all reducers constants to avoid typos
export const CHAT_SELECTED ="CHAT_SELECTED";
export const CHAT_UPDATED ="CHAT_UPDATED";

const rootReducer = combineReducers({
  chats: ChatReducer,
  activeChat : ActiveChat,
  updateChat: UpdateChat
});

export default rootReducer;
