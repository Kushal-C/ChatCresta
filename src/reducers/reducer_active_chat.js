import {CHAT_SELECTED} from './index';

//State is not application state, only state that reducer is responsible for. 
//If argument comes in undefined, set it to null
export default function(state = null, action) {
    switch(action.type){
        case CHAT_SELECTED:
            return action.payload;
    }

    return state;
}