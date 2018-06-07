import ACTIVE_CHAT from './index';

export default function(state = null, action) {
    switch(action.type){
        case ACTIVE_CHAT:
            return action.payload;
    }

    return state;
}