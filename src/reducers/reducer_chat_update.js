import { CHAT_UPDATED } from './index';
import { default_state } from './reducer_chats';
//State is not application state, only state that reducer is responsible for. 
//If argument comes in undefined, set it to null
export default function (state = default_state, action) {
    switch (action.type) {
        case CHAT_UPDATED:
            let index = action.payload.index;
            let newState = {...state};
            newState.chats[index].messages.push(action.payload.message);
            console.log(Object.assign({}, ...state.chats[index], newState) == state);
            return Object.assign({}, ...state.chats[index], newState);
        default:
            return state;
    }
}