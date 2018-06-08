import {CHAT_SELECTED, CHAT_UPDATED} from "../reducers/index";



export function selectChat(chat){
    //selectChat is an action creator, it needs to return an action
    //an object with a type property
    return {
        type: CHAT_SELECTED,
        payload: chat
    };
}

export function updateChat(object) {
    let index = object.i;
    let message = object.messages;
    return {
        type: CHAT_UPDATED,
        payload: {index, message}
    };
}


