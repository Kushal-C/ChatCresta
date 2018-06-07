import { combineReducers } from 'redux';
import chatReducer from './reducer_chats';
import activeChatReducer from './reducer_active_chat';

//Export all reducers constants to avoid typos
export const ACTIVE_CHAT ="ACTIVE_CHAT"; 

const rootReducer = combineReducers({
  chats: chatReducer
});

export default rootReducer;
