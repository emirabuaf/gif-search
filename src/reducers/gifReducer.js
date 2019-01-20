import { REQUEST_GIFS} from '../actions';


const INITIAL_STATE = {
  data:[]
}


export default function gifs (state=INITIAL_STATE,action){
  switch(action.type){
    case REQUEST_GIFS:
      return {...state,data:action.payload.data.data}
    default:
      return state;
  };
};
