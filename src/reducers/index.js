import { combineReducers } from 'redux';
import GifsReducer from './gifReducer';

const rootReducer = combineReducers({
  gifs:GifsReducer
});

export default rootReducer;
