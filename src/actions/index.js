import ACTIVE_CHAT from "../reducers/index";

export function selectChat(chat){
    return {
        type: ACTIVE_CHAT,
        payload: chat
    };
}