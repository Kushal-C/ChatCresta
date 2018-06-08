import { CHAT_UPDATED } from './index';
import {default_state} from './reducer_chats';
//State is not application state, only state that reducer is responsible for. 
//If argument comes in undefined, set it to null
export default function (state = default_state, action) {
    switch (action.type) {
        case CHAT_UPDATED:
            let index = action.payload.index;
            let newState = state;
            console.log(newState.chats[index]);
            newState.chats[index].messages.push(action.payload.message);
            return newState;
        default:
            return state;
    }
}