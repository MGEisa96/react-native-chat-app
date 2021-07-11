import {combineReducers} from 'redux';
import changeMsgReducer from './changeMsgReducer';

const rootReducer = combineReducers({
  msgReduce: changeMsgReducer,
});

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
