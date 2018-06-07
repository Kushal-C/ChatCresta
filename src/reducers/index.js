import { combineReducers } from 'redux';

//Export all reducers constants to avoid typos
export const ACTIVE_CHAT ="ACTIVE_CHAT"; 

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
