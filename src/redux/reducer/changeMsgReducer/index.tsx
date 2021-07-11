import {CHANGEMSG} from '../../action/keys';

const initialState = {
  msg: [],
};
const changeMsgReducer = (
  state = initialState,
  action: {type: any; payload: any},
) => {
  console.log('action :', action);
  switch (action.type) {
    case CHANGEMSG:
      return {...state, msg: action.payload};

    default:
      return state;
  }
};
export default changeMsgReducer;
